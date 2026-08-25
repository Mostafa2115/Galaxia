import React, { useState, useEffect, useCallback } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import BookmarkBtn from "../../components/BookmarkBtn/BookmarkBtn";
import "./Archive.css";

// ==========================================
// FALLBACK CURATED APOD & NASA ARCHIVE (Offline Support)
// ==========================================
const FALLBACK_APOD = {
  title: "Cosmic Cliffs in the Carina Nebula (JWST)",
  arabicTitle: "المنحدرات الكونية في سديم القاعدة (تلسكوب جيمس ويب)",
  date: "2024-03-15",
  explanation:
    "This landscape of 'mountains' and 'valleys' speckled with glittering stars is actually the edge of a nearby, young, star-forming region called NGC 3324 in the Carina Nebula. Captured in infrared light by NASA's James Webb Space Telescope, this image reveals for the first time previously invisible areas of star birth.",
  url: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop",
  hdurl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2400&auto=format&fit=crop",
  media_type: "image",
  copyright: "NASA, ESA, CSA, STScI"
};

const PRESET_TOPICS = [
  { id: "jwst", name: "James Webb (JWST)", query: "James Webb Telescope" },
  { id: "hubble", name: "Hubble Space Telescope", query: "Hubble Galaxy" },
  { id: "mars", name: "Mars Perseverance Rover", query: "Mars Perseverance" },
  { id: "artemis", name: "Artemis Lunar Mission", query: "Artemis Moon" },
  { id: "apollo", name: "Apollo Historic Archive", query: "Apollo Moon landing" },
  { id: "blackhole", name: "Black Holes & Quasars", query: "Black Hole" },
  { id: "nebula", name: "Deep Space Nebulae", query: "Nebula" }
];

const CURATED_STATIC_RESULTS = [
  {
    nasa_id: "PIA25325",
    title: "Webb's First Deep Field (SMACS 0723)",
    arabicTitle: "الحقل العميق الأول لتلسكوب جيمس ويب",
    center: "GSFC",
    date_created: "2022-07-12",
    description: "NASA's James Webb Space Telescope has produced the deepest and sharpest infrared image of the distant universe to date.",
    url: "https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?q=80&w=1000&auto=format&fit=crop",
    keywords: ["JWST", "Deep Field", "Gravitational Lensing"]
  },
  {
    nasa_id: "PIA24925",
    title: "Pillars of Creation in High Definition",
    arabicTitle: "أعمدة الخلق فائقة الدقة",
    center: "STScI",
    date_created: "2022-10-19",
    description: "NASA's James Webb Space Telescope captured a lush, highly detailed landscape – the iconic Pillars of Creation.",
    url: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=1000&auto=format&fit=crop",
    keywords: ["Eagle Nebula", "Star Birth", "JWST"]
  },
  {
    nasa_id: "PIA23984",
    title: "Perseverance Rover on Mars Surface",
    arabicTitle: "مركبة بيرسيفيرانس على سطح المريخ",
    center: "JPL",
    date_created: "2021-02-18",
    description: "NASA's Perseverance Mars rover looks down at its own shadow on the Martian soil inside Jezero Crater.",
    url: "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?q=80&w=1000&auto=format&fit=crop",
    keywords: ["Mars", "Rover", "Jezero Crater"]
  },
  {
    nasa_id: "AS11-40-5903",
    title: "Buzz Aldrin on the Lunar Surface",
    arabicTitle: "بز ألدرين على سطح القمر (أبولو 11)",
    center: "JSC",
    date_created: "1969-07-20",
    description: "Astronaut Buzz Aldrin walks on the surface of the Moon during the historic Apollo 11 mission.",
    url: "https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?q=80&w=1000&auto=format&fit=crop",
    keywords: ["Apollo 11", "Moonwalk", "Historic"]
  }
];

function Archive() {
  // NASA API Key Configuration
  const [apiKey, setApiKey] = useState(() => {
    return localStorage.getItem("galaxia_nasa_api_key") || "DEMO_KEY";
  });
  const [isApiKeyModalOpen, setIsApiKeyModalOpen] = useState(false);
  const [customKeyInput, setCustomKeyInput] = useState(apiKey);
  const [keySaveMessage, setKeySaveMessage] = useState("");

  // APOD State
  const [apodData, setApodData] = useState(FALLBACK_APOD);
  const [apodDate, setApodDate] = useState(() => {
    return new Date().toISOString().split("T")[0];
  });
  const [isApodLoading, setIsApodLoading] = useState(false);
  const [apodError, setApodError] = useState("");

  // NASA Media Search State
  const [searchQuery, setSearchQuery] = useState("James Webb Telescope");
  const [activeTopicId, setActiveTopicId] = useState("jwst");
  const [searchResults, setSearchResults] = useState(CURATED_STATIC_RESULTS);
  const [isSearching, setIsSearching] = useState(false);
  const [searchError, setSearchError] = useState("");

  // Selected Asset for Fullscreen Modal
  const [selectedAsset, setSelectedAsset] = useState(null);

  // 1. Fetch APOD (Astronomy Picture of the Day)
  const fetchApod = useCallback(
    async (selectedDate, key) => {
      setIsApodLoading(true);
      setApodError("");
      try {
        const url = `https://api.nasa.gov/planetary/apod?api_key=${key}&date=${selectedDate}`;
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error(`NASA API error (${res.status})`);
        }
        const data = await res.json();
        setApodData(data);
      } catch (err) {
        console.warn("APOD fetch failed, using fallback:", err);
        setApodError("Could not reach live APOD API. Displaying high-res curated archive.");
        setApodData(FALLBACK_APOD);
      } finally {
        setIsApodLoading(false);
      }
    },
    []
  );

  // 2. Fetch NASA Media Archive (images.nasa.gov API - No key needed)
  const fetchNasaMedia = useCallback(async (query) => {
    if (!query.trim()) return;
    setIsSearching(true);
    setSearchError("");
    try {
      const url = `https://images-api.nasa.gov/search?q=${encodeURIComponent(query)}&media_type=image`;
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error(`NASA Image Library error (${res.status})`);
      }
      const json = await res.json();
      const items = json?.collection?.items || [];

      if (items.length === 0) {
        setSearchResults(CURATED_STATIC_RESULTS);
        setSearchError("No results found for this query. Showing featured archives.");
      } else {
        const parsed = items.slice(0, 12).map((item) => {
          const data = item.data?.[0] || {};
          const links = item.links?.[0] || {};
          return {
            nasa_id: data.nasa_id || "NASA-IMG",
            title: data.title || "NASA Astronomical Capture",
            arabicTitle: "",
            center: data.center || "NASA",
            date_created: (data.date_created || "").split("T")[0],
            description: data.description || "Official imagery recorded by NASA space telescopes and planetary missions.",
            url: links.href || FALLBACK_APOD.url,
            keywords: (data.keywords || []).slice(0, 4)
          };
        });
        setSearchResults(parsed);
      }
    } catch (err) {
      console.warn("NASA Search failed, using curated results:", err);
      setSearchError("Live search unavailable. Showing curated NASA high-res gallery.");
      setSearchResults(CURATED_STATIC_RESULTS);
    } finally {
      setIsSearching(false);
    }
  }, []);

  // Initial Load
  useEffect(() => {
    fetchApod(apodDate, apiKey);
    fetchNasaMedia("James Webb Telescope");
  }, [fetchApod, fetchNasaMedia, apodDate, apiKey]);

  // Handle API Key Save
  const handleSaveApiKey = (e) => {
    e.preventDefault();
    const cleanKey = customKeyInput.trim() || "DEMO_KEY";
    setApiKey(cleanKey);
    localStorage.setItem("galaxia_nasa_api_key", cleanKey);
    setKeySaveMessage("✓ API Key successfully updated!");
    setTimeout(() => {
      setKeySaveMessage("");
      setIsApiKeyModalOpen(false);
    }, 1200);
    fetchApod(apodDate, cleanKey);
  };

  // Handle Preset Topic Selection
  const handleTopicClick = (topic) => {
    setActiveTopicId(topic.id);
    setSearchQuery(topic.query);
    fetchNasaMedia(topic.query);
  };

  return (
    <>
      <Navbar />

      <div className="archive-page-container">
        {/* ================= HERO SECTION & NASA API HUD ================= */}
        <section className="archive-hero-hud">
          <div className="archive-hero-header">
            <div className="nasa-status-badge">
              <span className="live-pulse-green"></span>
              NASA OPEN DATA GATEWAY & COSMIC ARCHIVE
            </div>

            <h1 className="archive-title">
              NASA Cosmic Media & Astronomical Archive
            </h1>
            <p className="archive-subtitle">
              أرشيف وكالة ناسا الفضائية المباشر — صور الفضاء اليومية (APOD)، تلسكوب جيمس ويب، هابل، ومركبات المريخ الاستكشافية.
            </p>

            {/* NASA API Key Status Bar */}
            <div className="nasa-api-hud-bar">
              <div className="api-info-item">
                <span className="api-label">GATEWAY CONNECTION:</span>
                <span className="api-value green-glow">ACTIVE (api.nasa.gov)</span>
              </div>
              <div className="api-info-item">
                <span className="api-label">CURRENT API KEY:</span>
                <span className="api-value cyan-glow">
                  {apiKey === "DEMO_KEY" ? "DEMO_KEY (NASA Public)" : `${apiKey.slice(0, 5)}...${apiKey.slice(-4)}`}
                </span>
              </div>
              <button
                className="configure-api-btn"
                onClick={() => setIsApiKeyModalOpen(true)}
              >
                ⚙️ Configure NASA API Key (تغيير المفتاح)
              </button>
            </div>
          </div>
        </section>

        {/* ================= SECTION 1: LIVE ASTRONOMY PICTURE OF THE DAY (APOD) ================= */}
        <section className="archive-apod-section">
          <div className="section-title-row">
            <div className="title-left">
              <span className="section-tag">DAILY FEATURE</span>
              <h2>Astronomy Picture of the Day (APOD)</h2>
              <p>صورة اليوم الفلكية المباشرة من وكالة ناسا مع إمكانية اختيار أي تاريخ زمني</p>
            </div>

            {/* APOD Date Picker */}
            <div className="apod-date-control">
              <label htmlFor="apod-date-input">EXPLORE BY DATE:</label>
              <input
                id="apod-date-input"
                type="date"
                value={apodDate}
                max={new Date().toISOString().split("T")[0]}
                onChange={(e) => {
                  setApodDate(e.target.value);
                  fetchApod(e.target.value, apiKey);
                }}
                className="apod-date-picker"
              />
            </div>
          </div>

          {apodError && <div className="archive-warning-bar">{apodError}</div>}

          {/* Main APOD Showcase Card */}
          <div className="apod-showcase-card">
            {isApodLoading ? (
              <div className="archive-loader-box">
                <div className="cosmic-spinner"></div>
                <span>FETCHING HIGH-RESOLUTION APOD FROM NASA...</span>
              </div>
            ) : (
              <div className="apod-grid">
                {/* APOD Image Viewport */}
                <div
                  className="apod-image-viewport"
                  onClick={() =>
                    setSelectedAsset({
                      nasa_id: "APOD-" + (apodData.date || "TODAY"),
                      title: apodData.title,
                      arabicTitle: apodData.arabicTitle || "",
                      center: apodData.copyright || "NASA APOD",
                      date_created: apodData.date,
                      description: apodData.explanation,
                      url: apodData.hdurl || apodData.url,
                      keywords: ["APOD", "NASA", "Daily Astronomy"]
                    })
                  }
                >
                  {apodData.media_type === "video" ? (
                    <iframe
                      src={apodData.url}
                      title={apodData.title}
                      className="apod-media-frame"
                      allowFullScreen
                    ></iframe>
                  ) : (
                    <img
                      src={apodData.url || FALLBACK_APOD.url}
                      alt={apodData.title}
                      className="apod-media-img"
                    />
                  )}
                  <div className="apod-zoom-overlay">
                    <span>🔍 Click to View Fullscreen HD</span>
                  </div>
                </div>

                {/* APOD Telemetry & Explanation */}
                <div className="apod-content-col">
                  <div className="apod-date-badge">
                    <span>📅 {apodData.date}</span>
                    {apodData.copyright && (
                      <span className="copyright-tag">© {apodData.copyright}</span>
                    )}
                  </div>

                  <h3 className="apod-headline">{apodData.title}</h3>
                  {apodData.arabicTitle && (
                    <h4 className="apod-ar-headline">{apodData.arabicTitle}</h4>
                  )}

                  <p className="apod-explanation">{apodData.explanation}</p>

                  <div className="apod-actions-row">
                    {apodData.hdurl && (
                      <a
                        href={apodData.hdurl}
                        target="_blank"
                        rel="noreferrer"
                        className="hd-download-btn"
                      >
                        ⬇ View Original NASA HD Image
                      </a>
                    )}

                    <BookmarkBtn
                      item={{
                        id: `apod-${apodData.date}`,
                        title: apodData.title,
                        category: "NASA APOD",
                        path: "/archive",
                        desc: apodData.explanation.slice(0, 120) + "..."
                      }}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* ================= SECTION 2: NASA DEEP SPACE MEDIA ARCHIVE SEARCH ================= */}
        <section className="archive-search-section">
          <div className="section-title-row">
            <div className="title-left">
              <span className="section-tag">MEDIA LIBRARY</span>
              <h2>NASA Deep Space Image & Mission Library</h2>
              <p>البحث المباشر في أرشيف صور ومهمات وتلسكوبات وكالة ناسا</p>
            </div>

            {/* Live Search Bar */}
            <form
              className="archive-search-bar"
              onSubmit={(e) => {
                e.preventDefault();
                fetchNasaMedia(searchQuery);
              }}
            >
              <span className="search-icon">🔍</span>
              <input
                type="text"
                placeholder="Search NASA Archives (e.g. James Webb, Mars, Nebula, Black Hole)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input-field"
              />
              <button type="submit" className="search-submit-btn">
                SEARCH
              </button>
            </form>
          </div>

          {/* Quick Topic Chips */}
          <div className="preset-topics-bar">
            {PRESET_TOPICS.map((topic) => (
              <button
                key={topic.id}
                className={`topic-chip ${activeTopicId === topic.id ? "topic-active" : ""}`}
                onClick={() => handleTopicClick(topic)}
              >
                {topic.name}
              </button>
            ))}
          </div>

          {searchError && <div className="archive-warning-bar">{searchError}</div>}

          {/* Search Results Grid */}
          {isSearching ? (
            <div className="archive-loader-box">
              <div className="cosmic-spinner"></div>
              <span>SEARCHING NASA PUBLIC IMAGE REPOSITORY...</span>
            </div>
          ) : (
            <div className="nasa-media-grid">
              {searchResults.map((item, idx) => (
                <div
                  key={item.nasa_id || idx}
                  className="nasa-media-card"
                  onClick={() => setSelectedAsset(item)}
                >
                  <div className="media-card-thumb">
                    <img
                      src={item.url}
                      alt={item.title}
                      className="media-thumb-img"
                      loading="lazy"
                    />
                    <div className="media-center-badge">{item.center}</div>
                  </div>

                  <div className="media-card-body">
                    <span className="media-date">{item.date_created}</span>
                    <h4 className="media-card-title">{item.title}</h4>
                    <p className="media-card-desc">
                      {item.description.slice(0, 110)}...
                    </p>

                    <div className="media-card-footer">
                      <span className="nasa-id-tag">ID: {item.nasa_id}</span>
                      <button className="view-dossier-btn">EXPLORE →</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* ================= NASA API KEY CONFIGURATION MODAL ================= */}
        {isApiKeyModalOpen && (
          <div
            className="archive-modal-overlay"
            onClick={() => setIsApiKeyModalOpen(false)}
          >
            <div
              className="api-config-modal-card"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="modal-close-btn"
                onClick={() => setIsApiKeyModalOpen(false)}
              >
                ✕
              </button>

              <div className="modal-header">
                <span className="modal-tag">NASA API GATEWAY</span>
                <h3>Configure Your NASA API Key</h3>
                <p>
                  يمكنك استخدام المفتاح الافتراضي <code>DEMO_KEY</code> أو الحصول على مفتاح خاص بك مجاناً وفوراً من موقع ناسا الرسمي لزيادة عدد الطلبات وسرعة التحميل.
                </p>
              </div>

              <form onSubmit={handleSaveApiKey} className="api-config-form">
                <div className="form-group">
                  <label htmlFor="custom-key-input">YOUR NASA API KEY:</label>
                  <input
                    id="custom-key-input"
                    type="text"
                    placeholder="Enter your NASA API Key or leave DEMO_KEY"
                    value={customKeyInput}
                    onChange={(e) => setCustomKeyInput(e.target.value)}
                    className="key-input-box"
                  />
                </div>

                <div className="api-help-links">
                  <span>Need an API Key?</span>
                  <a
                    href="https://api.nasa.gov"
                    target="_blank"
                    rel="noreferrer"
                    className="get-key-link"
                  >
                    Get Free NASA API Key at api.nasa.gov ↗
                  </a>
                </div>

                {keySaveMessage && (
                  <div className="key-success-msg">{keySaveMessage}</div>
                )}

                <div className="modal-btn-row">
                  <button
                    type="button"
                    className="reset-demo-btn"
                    onClick={() => setCustomKeyInput("DEMO_KEY")}
                  >
                    Reset to DEMO_KEY
                  </button>
                  <button type="submit" className="save-key-btn">
                    SAVE & CONNECT KEY
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* ================= FULLSCREEN ASSET DOSSIER MODAL ================= */}
        {selectedAsset && (
          <div
            className="archive-modal-overlay"
            onClick={() => setSelectedAsset(null)}
          >
            <div
              className="asset-dossier-modal-card"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="modal-close-btn"
                onClick={() => setSelectedAsset(null)}
              >
                ✕
              </button>

              <div className="dossier-media-viewport">
                <img
                  src={selectedAsset.url}
                  alt={selectedAsset.title}
                  className="dossier-large-img"
                />
              </div>

              <div className="dossier-details-container">
                <div className="dossier-meta-row">
                  <span className="meta-badge center-badge">
                    CENTER: {selectedAsset.center}
                  </span>
                  <span className="meta-badge date-badge">
                    📅 {selectedAsset.date_created}
                  </span>
                  <span className="meta-badge id-badge">
                    ID: {selectedAsset.nasa_id}
                  </span>
                </div>

                <h2 className="dossier-title">{selectedAsset.title}</h2>

                <p className="dossier-full-desc">{selectedAsset.description}</p>

                {selectedAsset.keywords && selectedAsset.keywords.length > 0 && (
                  <div className="dossier-keywords-list">
                    <span className="keywords-label">KEYWORDS:</span>
                    {selectedAsset.keywords.map((kw, i) => (
                      <span key={i} className="keyword-chip">
                        #{kw}
                      </span>
                    ))}
                  </div>
                )}

                <div className="dossier-bottom-actions">
                  <a
                    href={selectedAsset.url}
                    target="_blank"
                    rel="noreferrer"
                    className="open-original-btn"
                  >
                    ↗ Open High-Res NASA Asset
                  </a>

                  <BookmarkBtn
                    item={{
                      id: `nasa-${selectedAsset.nasa_id}`,
                      title: selectedAsset.title,
                      category: "NASA Archive",
                      path: "/archive",
                      desc: selectedAsset.description.slice(0, 120) + "..."
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </>
  );
}

export default Archive;
