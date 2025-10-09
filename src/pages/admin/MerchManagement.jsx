import React, { useState } from "react";

export default function MerchManagement() {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [newMerch, setNewMerch] = useState({ name: "", description: "", price: 0, sizes: [] });
  const toggleSize = (s) =>
    setNewMerch((m) =>
      m.sizes.includes(s)
        ? { ...m, sizes: m.sizes.filter((x) => x !== s) }
        : { ...m, sizes: [...m.sizes, s] }
    );
  const merchItems = [
    {
      id: 1,
      name: "RETRO SYNTH TEE",
      price: "€24.99",
      sizes: ["S", "M", "L"],
      stock: "In Stock",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/691b1ac33d2668f34fc970584ced484ae724a734?width=114",
    },
    {
      id: 2,
      name: "PRODUCER CAP",
      price: "€19.99",
      sizes: ["S", "M"],
      stock: "Out of Stock",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/a4381f6bc0f03ca236dad3e2462509abed714d5a?width=114",
    },
    {
      id: 3,
      name: "RETRO SYNTH TEE",
      price: "€24.99",
      sizes: ["S", "M", "L"],
      stock: "In Stock",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/1a3606a5bace40e2d3d3e298f3fcedbe29bd5933?width=114",
    },
    {
      id: 4,
      name: "PRODUCER CAP",
      price: "€19.99",
      sizes: ["S", "M"],
      stock: "Out of Stock",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/2a6c2029bb8e9dbfe1770d29df50167ac4b1d8b5?width=114",
    },
    {
      id: 5,
      name: "PRODUCER CAP",
      price: "€19.99",
      sizes: ["S", "M"],
      stock: "Out of Stock",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/aa56137601af07548c414fb57bdcf4824f47ed9a?width=114",
    },
  ];

  const inStockCount = merchItems.filter((i) => i.stock === "In Stock").length;

  const handleFileSelect = (e) => {
    const files = e.target.files ? Array.from(e.target.files) : [];
    if (files.length) {
      setSelectedFiles(files);
      setIsAddModalOpen(true);
    } else {
      setSelectedFiles([]);
    }
  };
  const handleDrop = (e) => {
    e.preventDefault();
    const files = e.dataTransfer.files ? Array.from(e.dataTransfer.files) : [];
    if (files.length) {
      setSelectedFiles(files);
      setIsAddModalOpen(true);
    } else {
      setSelectedFiles([]);
    }
  };
  const handleDragOver = (e) => e.preventDefault();

  return (
    <div className="app alexandria-font">
      <style>{`
        :root{
          --olive:#525132;
          --tan:#CBC895;
          --yellow:#EBE23C;
          --yellow2:#FFF069;
          --yellow3:#FFF999;
          --header-dark:#2F2D0E;
          --table-dark:#131319;
          --green:#12E008;
          --green2:#55DF55;
          --cyan:#5ACFB5;
          --red:#EB181B;
          --button:#DDD1B1;
          --text:#ffffff;
          --ink:#191A22;
        }
        *{box-sizing:border-box}
        body,html,#root{height:100%}
        .app{
          min-height:100vh;
          background:var(--olive);
          color:var(--text);
        }
        .container{max-width:1200px;margin:0 auto;padding:0 1.5rem}
        .pixel{font-family:"Press Start 2P", monospace}
        .upload{
          border:3px dashed var(--tan);
        }
        .upload-inner{
          padding:4rem 1rem;
          display:flex;flex-direction:column;align-items:center;gap:2rem;
        }
        .upload-title{
          color:var(--yellow);
          text-align:center;
          font-size:22px;line-height:1.25;
          text-shadow:0 0 0 #000;
        }
        .icons{display:flex;gap:1rem}
        .icon-box{
          width:55px;height:55px;border:2.17px solid var(--tan);
          display:flex;align-items:center;justify-content:center;background:transparent
        }
        .btn{
          background:var(--button);color:var(--ink);
          font-weight:700;border-radius:8px;
          box-shadow:0 7px 2px 0 #000;
          padding:.9rem 1.75rem;border:none;cursor:pointer
        }
        .btn:active{transform:translateY(2px);box-shadow:0 5px 2px 0 #000}
        .inventory{background:rgba(181,179,135,0.16); border-top:1px solid var(--tan)}
        .inv-head{background:var(--header-dark);border-bottom:1px solid var(--tan)}
        .inv-head-row{display:flex;flex-direction:column;gap:1rem; padding:1.25rem 0}
        .inv-title{font-size:23px}
        .stats{color:var(--yellow2)}
        .table-head{background:var(--table-dark)}
        .head-grid{
          display:grid;align-items:center;
          grid-template-columns:80px 1fr 200px 200px 200px 180px;
          gap:2rem;padding:1.25rem 0;
        }
        .head-cell{color:var(--tan);font-size:20px}
        .row{
          border-bottom:1px solid var(--tan);
          background:rgba(197,194,116,0.16);
        }
        .row-grid{
          display:grid;align-items:center;
          grid-template-columns:80px 1fr 200px 200px 200px 180px;
          gap:2rem;padding:1.25rem 0;
        }
        .size{background:rgba(188,185,137,0.24);min-width:42px;padding:.5rem .75rem;
          text-align:center;color:var(--yellow3)}
        .price{color:var(--cyan)}
        .stock.in{color:var(--green)}
        .stock.out{color:var(--red)}
        .actions{display:flex;gap:.5rem}
        .a-btn{
          width:42px;height:37px;display:flex;align-items:center;justify-content:center;background:transparent;
          border:2px solid currentColor;cursor:pointer
        }
        .a-green{color:var(--green2)}
        .a-yellow{color:#FFEF2E}
        .a-red{color:var(--red); background:rgba(235,24,27,0.13)}
        .preview{width:57px;height:57px;object-fit:cover}
        /* Responsive - keep table horizontal with scroll */
        @media (max-width: 1199px){
          .table-head{display:block}
          .container{overflow-x:auto}
          .head-grid,.row-grid{
            display:grid;
            grid-template-columns:80px minmax(200px,1fr) 140px 140px 140px 120px;
            gap:1rem;
            padding:1rem 0;
            min-width:840px;
          }
          .row{border:1px solid var(--tan); margin:.75rem 0; padding:.75rem; border-radius:10px}
          .card-top{display:none}
        }
      `}</style>

      {/* Upload */}
      <section className="upload">
        <div className="container">
          <div
            className="upload-inner"
            onDrop={handleDrop}
            onDragOver={handleDragOver}
          >
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/2e4a5db8a86a7da228747b29219a3f98d0d41ea7?width=181"
              alt="tshirt icon"
              width={90}
              height={90}
            />
            <h1 className="upload-title pixel">
              DRAG & DROP PNG/JPEG HERE
              <br />
              OR CLICK TO UPLOAD
            </h1>

            <div
              className="icons"
              onClick={() => document.getElementById("file-input")?.click()}
            >
              {[0, 1, 2].map((i) => (
                <div className="icon-box" key={i} aria-hidden>
                  <TeeIcon />
                </div>
              ))}
            </div>

            <input
              id="file-input"
              type="file"
              accept="image/png,image/jpeg"
              multiple
              onChange={handleFileSelect}
              hidden
            />

            <button className="btn">Select Files</button>
            {selectedFiles.length > 0 && (
              <div className="stats" style={{ fontSize: 14 }}>
                {selectedFiles.length} file(s) selected
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Inventory */}
      <section className="inventory">
        <div className="inv-head">
          <div className="container inv-head-row">
            <div
              className="pixel inv-title"
              style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}
            >
              <span>MERCH INVENTORY</span>
              <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                <span className="stats">
                  Total Items: {merchItems.length} | In Stock: {inStockCount}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop header */}
        <div className="table-head">
          <div className="container">
            <div className="head-grid">
              {["PREVIEW", "PRODUCT NAME", "PRICE", "SIZES", "STOCK", "ACTIONS"].map(
                (h) => (
                  <div key={h} className="pixel head-cell">
                    {h}
                  </div>
                )
              )}
            </div>
          </div>
        </div>

        {/* Rows */}
        <div className="container">
          {merchItems.map((item) => (
            <div className="row" key={item.id}>
              {/* Desktop row */}
              <div className="row-grid">
                <img className="preview" src={item.image} alt={item.name} />
                <div style={{ fontSize: 20 }}>{item.name}</div>
                <div className="price" style={{ fontSize: 20 }}>
                  {item.price}
                </div>
                <div className="sizes" style={{ display: "flex", gap: "8px" }}>
                  {item.sizes.map((s) => (
                    <div className="size" key={s}>
                      {s}
                    </div>
                  ))}
                </div>
                <div
                  className={`stock ${item.stock === "In Stock" ? "in" : "out"}`}
                  style={{ fontSize: 20 }}
                >
                  {item.stock}
                </div>
                <div className="actions">
                  <button className="a-btn a-green" aria-label="View">
                    <EyeIcon />
                  </button>
                  <button className="a-btn a-yellow" aria-label="Edit">
                    <PencilIcon />
                  </button>
                  <button className="a-btn a-red" aria-label="Delete">
                    <XIcon />
                  </button>
                </div>
              </div>

              {/* Mobile card layout */}
              <div className="card-top" style={{ display: "none" }} />
            </div>
          ))}
        </div>
      </section>
      {isAddModalOpen && (
        <div role="dialog" aria-modal="true" aria-labelledby="add-merch-title" style={{
          position: "fixed", inset: 0, background: "rgba(0,0,0,0.5)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 1000
        }}>
          <div style={{
            width: 520, maxWidth: "90%", background: "#191A22", border: "2px solid var(--tan)", borderRadius: 12, boxShadow: "0 10px 0 #000"
          }} className="pixel">
            <div style={{display:"flex", alignItems:"center", justifyContent:"space-between", padding:"1rem 1.25rem", borderBottom: "1px solid var(--tan)", color: "var(--yellow2)"}}>
              <h2 id="add-merch-title" style={{margin:0, fontSize:18}}>ADD MERCH ITEM</h2>
              <button onClick={() => setIsAddModalOpen(false)} aria-label="Close" style={{background:"transparent", border:"none", color:"var(--tan)", cursor:"pointer", fontSize:18}}>✕</button>
            </div>
            <div style={{padding:"1.25rem", display:"grid", gap:"1rem", color:"var(--tan)"}}>
              <label style={{display:"grid", gap:"0.5rem"}}>
                <span style={{fontSize:13}}>Product Name</span>
                <input value={newMerch.name} onChange={(e)=>setNewMerch(m=>({...m, name:e.target.value}))} placeholder="Enter Product Name" style={{
                  width:"100%", background:"#0f1016", color:"#fff", border:"2px solid var(--tan)", borderRadius: 8, padding:"0.75rem 0.85rem"
                }}/>
              </label>
              <label style={{display:"grid", gap:"0.5rem"}}>
                <span style={{fontSize:13}}>Description</span>
                <textarea value={newMerch.description} onChange={(e)=>setNewMerch(m=>({...m, description:e.target.value}))} placeholder="Enter Product Description" rows={4} style={{
                  width:"100%", background:"#0f1016", color:"#fff", border:"2px solid var(--tan)", borderRadius: 8, padding:"0.75rem 0.85rem", resize:"vertical"
                }}/>
              </label>
              <label style={{display:"grid", gap:"0.5rem"}}>
                <span style={{fontSize:13}}>Price (€)</span>
                <input type="number" min={0} value={newMerch.price} onChange={(e)=>setNewMerch(m=>({...m, price:Number(e.target.value)}))} style={{
                  width:"100%", background:"#0f1016", color:"#fff", border:"2px solid var(--tan)", borderRadius: 8, padding:"0.75rem 0.85rem"
                }}/>
              </label>
              <div style={{display:"grid", gap:"0.5rem"}}>
                 <span style={{fontSize:13}}>Size</span>
                 <div style={{display:"flex", gap:"0.5rem"}}>
                  {["S","M","L","XL"].map(s=> (
                    <button key={s} type="button" onClick={()=>toggleSize(s)} style={{
                      background: newMerch.sizes.includes(s) ? "var(--yellow2)" : "#0f1016",
                      color: newMerch.sizes.includes(s) ? "#000" : "#fff",
                      border:"2px solid var(--tan)", borderRadius:8, padding:"0.5rem 0.75rem", minWidth:42, cursor:"pointer"
                    }}>{s}</button>
                  ))}
                </div>
              </div>
              <div style={{display:"flex", justifyContent:"space-between", gap:"1rem", paddingTop:"0.5rem"}}>
                <button className="btn" onClick={()=>setIsAddModalOpen(false)} style={{background:"#3a3a3a", color:"#fff"}}>Cancel</button>
                <button className="btn" onClick={()=>{
                  setIsAddModalOpen(false);
                }} style={{background:"var(--button)", color:"var(--ink)"}}>Create</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* Inline SVGs (no external deps) */
function TeeIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 48 48" fill="none">
      <path
        d="M30 6l10 4a3 3 0 011.9 2.8V18h-5v18a4 4 0 01-4 4H15a4 4 0 01-4-4V18H6v-5.2A3 3 0 017.9 10L18 6a6 6 0 006 4 6 6 0 006-4z"
        fill="#CBC895"
      />
    </svg>
  );
}
function EyeIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 40 40" fill="none">
      <path
        d="M20 8C11 8 4.5 16 4 20c.5 4 7 12 16 12s15.5-8 16-12c-.5-4-7-12-16-12zm0 18a6 6 0 110-12 6 6 0 010 12z"
        fill="currentColor"
      />
    </svg>
  );
}
function PencilIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 40 40" fill="none">
      <path
        d="M24 8l8 8-16 16H8v-8L24 8zm10-2a3 3 0 00-4 0l-2 2 8 8 2-2a3 3 0 000-4l-4-4z"
        fill="currentColor"
      />
    </svg>
  );
}
function XIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 40 40" fill="none">
      <path
        d="M12 12l16 16M28 12L12 28"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
}