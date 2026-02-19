// src/sections/VisualizadorLivros.tsx
import { useState, useEffect, useCallback } from 'react';

const SAMPLE_PAGES: Record<string, string[]> = {
  'afelandra': ['1.jpg', '2.jpg', '3.jpg'],
  'diario-cassandra': [],
  'enzo': [],
  'forest': [],
  'insaciabilidade': [],
  'lavanderia': [],
  'musadanoite': [],
  'ovelhapink': [],
  'peonias': [],
  'poeta-tigre': []
};

const LIBRARY = [
  { id: 'afelandra', title: 'Afelandra', author: 'Autor', cover: '1-afelandra.webp', sampleFolder: 'afelandra', description: 'Volume 1' },
  { id: 'diario-cassandra', title: 'Diário de Cassandra', author: 'Autor', cover: 'diario-cassandra.webp', sampleFolder: 'diario-cassandra', description: 'Edição Única' },
  { id: 'enzo', title: 'Enzo', author: 'Autor', cover: 'enzo1.jpg', sampleFolder: 'enzo', description: 'Volume 1' },
  { id: 'forest', title: 'Forest', author: 'Autor', cover: 'forest.webp', sampleFolder: 'forest', description: 'Edição Única' },
  { id: 'insaciabilidade', title: 'Insaciabilidade', author: 'Autor', cover: 'I-insaciabilidade.webp', sampleFolder: 'insaciabilidade', description: 'Volume I' },
  { id: 'lavanderia', title: 'Lavanderia', author: 'Autor', cover: 'lavanderia.webp', sampleFolder: 'lavanderia', description: 'Edição Única' },
  { id: 'musadanoite', title: 'Musa da Noite', author: 'Autor', cover: 'musadanoite.webp', sampleFolder: 'musadanoite', description: 'Edição Única' },
  { id: 'ovelhapink', title: 'Ovelha Pink', author: 'Autor', cover: 'ovelhapink.webp', sampleFolder: 'ovelhapink', description: 'Edição Única' },
  { id: 'peonias', title: 'Peônias', author: 'Autor', cover: 'Peonias.webp', sampleFolder: 'peonias', description: 'Edição Única' },
  { id: 'poeta-tigre', title: 'Poeta Tigre', author: 'Autor', cover: 'poeta-tigre.webp', sampleFolder: 'poeta-tigre', description: 'Edição Única' }
];

export function VisualizadorLivros() {
  const [currentBook, setCurrentBook] = useState<typeof LIBRARY[0] | null>(null);
  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const [zoom, setZoom] = useState(1);
  const [sidebarVisible, setSidebarVisible] = useState(true);
  const [bookPages, setBookPages] = useState<string[]>([]);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  // ✅ CORRIGIDO: Caminho relativo sem barra inicial
  const getCoverUrl = (filename: string) => `images/books/${filename}`;
  const getSampleUrl = (folder: string, filename: string) => `sample/${folder}/${filename}`;

  const loadBookPages = useCallback((book: typeof LIBRARY[0]) => {
    const pages = [getCoverUrl(book.cover)];
    const samples = SAMPLE_PAGES[book.id] || [];
    samples.forEach(filename => {
      pages.push(getSampleUrl(book.sampleFolder, filename));
    });
    return pages;
  }, []);

  const openBook = useCallback((bookId: string) => {
    const book = LIBRARY.find(b => b.id === bookId);
    if (!book) return;

    const pages = loadBookPages(book);
    setCurrentBook(book);
    setBookPages(pages);
    setCurrentPageIndex(0);
    setZoom(1);
    setIsViewerOpen(true);
    document.body.style.overflow = 'hidden';
  }, [loadBookPages]);

  const closeViewer = useCallback(() => {
    setIsViewerOpen(false);
    setCurrentBook(null);
    document.body.style.overflow = '';
  }, []);

  const nextPage = useCallback(() => {
    if (currentPageIndex < bookPages.length - 1) {
      setCurrentPageIndex(prev => prev + 1);
    }
  }, [currentPageIndex, bookPages.length]);

  const prevPage = useCallback(() => {
    if (currentPageIndex > 0) {
      setCurrentPageIndex(prev => prev - 1);
    }
  }, [currentPageIndex]);

  const goToPage = useCallback((pageNum: number) => {
    if (pageNum >= 1 && pageNum <= bookPages.length) {
      setCurrentPageIndex(pageNum - 1);
    }
  }, [bookPages.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isViewerOpen) return;
      if (e.key === 'ArrowRight') nextPage();
      if (e.key === 'ArrowLeft') prevPage();
      if (e.key === 'Escape') closeViewer();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isViewerOpen, nextPage, prevPage, closeViewer]);

  return (
    <div className="book-viewer">
      <div className="status-bar">
        <div className="status-indicator">
          <div className="status-dot"></div>
          <span>Visualizador v2.2 • {LIBRARY.length} títulos</span>
        </div>
        <button className="reload-btn" onClick={() => window.location.reload()}>
          🔄 Atualizar
        </button>
      </div>

      <header className="header">
        <h1>📚 Acervo Digital</h1>
        <p>Explore nossa coleção de livros</p>
      </header>

      <main className="books-container">
        <h2 className="section-title">Coleção Completa</h2>
        <div className="books-grid">
          {LIBRARY.map(book => {
            const samples = SAMPLE_PAGES[book.id] || [];
            const hasSamples = samples.length > 0;

            return (
              <div key={book.id} className="book-card" onClick={() => openBook(book.id)}>
                <div className="book-cover-wrap">
                  <div className="cover-placeholder">📖</div>
                  <img
                    src={getCoverUrl(book.cover)}
                    className="book-cover"
                    alt={book.title}
                    onLoad={(e) => e.currentTarget.classList.add('loaded')}
                  />
                </div>
                <div className="book-info">
                  <div className="book-title">
                    {book.title}
                    <span className={`sample-badge ${hasSamples ? 'has-sample' : 'no-sample'}`}>
                      {hasSamples ? `${samples.length} amostras` : 'só capa'}
                    </span>
                  </div>
                  <div className="book-meta">
                    <span>{book.description}</span>
                    <button 
                      className="read-btn" 
                      onClick={(e) => {
                        e.stopPropagation();
                        openBook(book.id);
                      }}
                    >
                      {hasSamples ? 'Ler Amostra' : 'Ver Capa'}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </main>

      {isViewerOpen && currentBook && (
        <div className="viewer-overlay active">
          <div className="viewer-container">
            <div className="viewer-toolbar">
              <div className="viewer-title">
                <img src={getCoverUrl(currentBook.cover)} className="viewer-thumb" alt="" />
                <div className="viewer-info">
                  <h3>{currentBook.title}</h3>
                  <p>{currentBook.author} • {bookPages.length} página(s)</p>
                </div>
              </div>
              <div className="viewer-controls">
                <button onClick={() => setSidebarVisible(v => !v)}>☰</button>
                <button onClick={() => setZoom(z => Math.max(z - 0.25, 0.5))}>−</button>
                <button onClick={() => setZoom(z => Math.min(z + 0.25, 3))}>+</button>
                <button onClick={() => setZoom(1)}>⛶</button>
                <button onClick={closeViewer}>✕</button>
              </div>
            </div>

            <div className="viewer-stage">
              <aside className={`pages-sidebar ${!sidebarVisible ? 'hidden' : ''}`}>
                {bookPages.map((page, idx) => (
                  <div
                    key={idx}
                    className={`thumb-page ${idx === currentPageIndex ? 'active' : ''}`}
                    onClick={() => goToPage(idx + 1)}
                  >
                    <img src={page} alt="" />
                    <div className="page-label">{idx === 0 ? 'Capa' : `Pág. ${idx}`}</div>
                  </div>
                ))}
              </aside>

              <div className="book-display">
                <div className="book-page-container" style={{ transform: `scale(${zoom})` }}>
                  <img src={bookPages[currentPageIndex]} alt="" />
                  <div className="page-number-display">
                    {currentPageIndex === 0 ? 'Capa' : `Página ${currentPageIndex}`} de {bookPages.length > 1 ? `${bookPages.length - 1} amostras` : 'só capa'}
                  </div>
                </div>
                <div className="nav-overlay prev" onClick={prevPage}><span>‹</span></div>
                <div className="nav-overlay next" onClick={nextPage}><span>›</span></div>
              </div>
            </div>

            <div className="viewer-bottom">
              <div className="page-input-group">
                <span>Página</span>
                <input
                  type="number"
                  min={1}
                  max={bookPages.length}
                  value={currentPageIndex + 1}
                  onChange={(e) => goToPage(parseInt(e.target.value))}
                />
                <span>de {bookPages.length}</span>
              </div>
              <input
                type="range"
                min={1}
                max={bookPages.length}
                value={currentPageIndex + 1}
                onChange={(e) => goToPage(parseInt(e.target.value))}
              />
            </div>
          </div>
        </div>
      )}

      <style>{`
        .book-viewer { min-height: 100vh; background: #0f0f13; color: #f0f0f5; font-family: system-ui, sans-serif; }
        .status-bar { background: #1a1a20; border-bottom: 1px solid #2a2a35; padding: 10px 20px; display: flex; justify-content: space-between; align-items: center; font-size: 0.85rem; }
        .status-indicator { display: flex; align-items: center; gap: 8px; }
        .status-dot { width: 8px; height: 8px; border-radius: 50%; background: #27ae60; animation: pulse 2s infinite; }
        @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.5; } }
        .reload-btn { background: #e74c3c; color: white; border: none; padding: 6px 12px; border-radius: 4px; cursor: pointer; }
        .header { background: linear-gradient(135deg, #1a1a20 0%, #0f0f13 100%); border-bottom: 1px solid #2a2a35; padding: 30px; text-align: center; }
        .header h1 { font-size: 2.5rem; font-weight: 300; margin-bottom: 10px; }
        .header p { color: #888; font-size: 1.1rem; }
        .books-container { max-width: 1400px; margin: 0 auto; padding: 40px 20px; }
        .section-title { font-size: 1.3rem; color: #888; margin-bottom: 25px; text-transform: uppercase; letter-spacing: 2px; border-left: 4px solid #e74c3c; padding-left: 15px; }
        .books-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 30px; }
        .book-card { background: #252530; border: 1px solid #2a2a35; border-radius: 12px; overflow: hidden; cursor: pointer; transition: all 0.3s; }
        .book-card:hover { transform: translateY(-8px); border-color: #e74c3c; box-shadow: 0 20px 40px rgba(231, 76, 60, 0.2); }
        .book-cover-wrap { width: 100%; aspect-ratio: 2/3; background: linear-gradient(135deg, #2a2a35, #1a1a20); position: relative; overflow: hidden; }
        .cover-placeholder { position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; font-size: 3rem; z-index: 1; }
        .book-cover { width: 100%; height: 100%; object-fit: cover; opacity: 0; transition: opacity 0.3s; position: relative; z-index: 2; }
        .book-cover.loaded { opacity: 1; }
        .book-info { padding: 20px; }
        .book-title { font-size: 1.1rem; font-weight: 600; margin-bottom: 8px; display: flex; align-items: center; gap: 8px; flex-wrap: wrap; }
        .sample-badge { font-size: 0.7rem; padding: 2px 8px; border-radius: 12px; white-space: nowrap; }
        .sample-badge.has-sample { background: rgba(39, 174, 96, 0.2); color: #27ae60; }
        .sample-badge.no-sample { background: rgba(243, 156, 18, 0.2); color: #f39c12; }
        .book-meta { color: #888; font-size: 0.85rem; display: flex; justify-content: space-between; align-items: center; gap: 10px; }
        .read-btn { background: #e74c3c; color: white; border: none; padding: 8px 16px; border-radius: 20px; font-size: 0.8rem; cursor: pointer; opacity: 0; transition: opacity 0.3s; white-space: nowrap; }
        .book-card:hover .read-btn { opacity: 1; }
        
        .viewer-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.95); z-index: 1000; display: none; opacity: 0; transition: opacity 0.3s; }
        .viewer-overlay.active { display: flex; opacity: 1; }
        .viewer-container { width: 100%; height: 100%; display: flex; flex-direction: column; }
        .viewer-toolbar { background: #1a1a20; border-bottom: 1px solid #2a2a35; padding: 15px 30px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 15px; }
        .viewer-title { display: flex; align-items: center; gap: 15px; }
        .viewer-thumb { width: 40px; height: 55px; object-fit: cover; border-radius: 4px; background: #252530; flex-shrink: 0; }
        .viewer-info h3 { font-size: 1.1rem; margin-bottom: 3px; }
        .viewer-info p { font-size: 0.85rem; color: #888; }
        .viewer-controls { display: flex; gap: 10px; }
        .viewer-controls button { background: rgba(255,255,255,0.1); border: none; color: #f0f0f5; width: 40px; height: 40px; border-radius: 8px; cursor: pointer; display: flex; align-items: center; justify-content: center; font-size: 1.2rem; transition: all 0.2s; }
        .viewer-controls button:hover { background: #e74c3c; }
        .viewer-stage { flex: 1; display: flex; overflow: hidden; }
        .pages-sidebar { width: 200px; background: #1a1a20; border-right: 1px solid #2a2a35; overflow-y: auto; padding: 20px; display: flex; flex-direction: column; gap: 15px; flex-shrink: 0; }
        .pages-sidebar.hidden { display: none; }
        .thumb-page { cursor: pointer; border: 2px solid transparent; border-radius: 8px; overflow: hidden; transition: all 0.2s; position: relative; background: #252530; }
        .thumb-page:hover { border-color: #e74c3c; }
        .thumb-page.active { border-color: #e74c3c; box-shadow: 0 0 0 3px rgba(231, 76, 60, 0.3); }
        .thumb-page img { width: 100%; aspect-ratio: 2/3; object-fit: cover; display: block; }
        .page-label { position: absolute; bottom: 0; left: 0; right: 0; background: rgba(0,0,0,0.7); color: white; font-size: 0.75rem; padding: 5px; text-align: center; }
        .book-display { flex: 1; display: flex; align-items: center; justify-content: center; padding: 40px; position: relative; overflow: auto; background: #0a0a0a; }
        .book-page-container { position: relative; box-shadow: 0 30px 60px rgba(0,0,0,0.8); background: #f5f5dc; border-radius: 4px; overflow: hidden; max-width: 90%; max-height: 90%; transition: transform 0.3s; }
        .book-page-container img { max-width: 100%; max-height: 85vh; display: block; }
        .page-number-display { position: absolute; bottom: 20px; left: 50%; transform: translateX(-50%); background: rgba(0,0,0,0.7); color: white; padding: 8px 20px; border-radius: 20px; font-size: 0.9rem; white-space: nowrap; }
        .nav-overlay { position: absolute; top: 0; bottom: 0; width: 100px; cursor: pointer; display: flex; align-items: center; justify-content: center; opacity: 0; transition: opacity 0.3s; }
        .nav-overlay:hover { opacity: 1; }
        .nav-overlay.prev { left: 0; background: linear-gradient(to right, rgba(0,0,0,0.3), transparent); }
        .nav-overlay.next { right: 0; background: linear-gradient(to left, rgba(0,0,0,0.3), transparent); }
        .nav-overlay span { font-size: 3rem; color: white; text-shadow: 0 2px 10px rgba(0,0,0,0.5); }
        .viewer-bottom { background: #1a1a20; border-top: 1px solid #2a2a35; padding: 15px 30px; display: flex; justify-content: center; align-items: center; gap: 30px; flex-wrap: wrap; }
        .page-input-group { display: flex; align-items: center; gap: 10px; color: #888; }
        .page-input-group input { width: 60px; background: rgba(0,0,0,0.3); border: 1px solid #2a2a35; color: #f0f0f5; padding: 8px; border-radius: 6px; text-align: center; }
        .viewer-bottom input[type="range"] { flex: 1; max-width: 400px; min-width: 200px; height: 6px; -webkit-appearance: none; background: rgba(255,255,255,0.1); border-radius: 3px; outline: none; }
        .viewer-bottom input[type="range"]::-webkit-slider-thumb { -webkit-appearance: none; width: 18px; height: 18px; background: #e74c3c; border-radius: 50%; cursor: pointer; }
        
        @media (max-width: 768px) {
          .books-grid { grid-template-columns: repeat(2, 1fr); gap: 20px; }
          .pages-sidebar { display: none; }
        }
      `}</style>
    </div>
  );
}
