import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMerchs, createMerch, deleteMerch } from "../../store/actions/adminActions";
import { toast } from "sonner";

export default function MerchManagement() {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [newMerch, setNewMerch] = useState({ name: "", description: "", price: 0, sizes: [] });
  const toggleSize = (s) =>
    setNewMerch((m) =>
      m.sizes.includes(s)
        ? { ...m, sizes: m.sizes.filter((x) => x !== s) }
        : { ...m, sizes: [...m.sizes, s] }
    );
  const dispatch = useDispatch();
  const { merchs: merchItems, isLoadingMerchs, isCreatingMerch } = useSelector((state) => state.admin);

  useEffect(() => {
    dispatch(getMerchs());
  }, [dispatch]);

  const inStockCount = merchItems.filter((i) => i.stock === "in stock" || i.stock === "In Stock").length;

  const handleFileSelect = (e) => {
    const files = e.target.files ? Array.from(e.target.files) : [];
    setSelectedFiles(files.length ? files : []);
  };
  const handleDrop = (e) => {
    e.preventDefault();
    const files = e.dataTransfer.files ? Array.from(e.dataTransfer.files) : [];
    setSelectedFiles(files.length ? files : []);
  };
  const handleDragOver = (e) => e.preventDefault();
  const handleUpload = async () => {
    if (!newMerch.name || !newMerch.price || newMerch.sizes.length === 0) {
      toast.error("Please fill in all required fields (Name, Price, Sizes)");
      return;
    }
    if (selectedFiles.length === 0) {
      toast.error("Please select at least one image");
      return;
    }

    const formData = new FormData();
    formData.append("name", newMerch.name);
    formData.append("description", newMerch.description);
    formData.append("price", newMerch.price);
    formData.append("sizes", newMerch.sizes.join(","));

    // First file as cover_img
    formData.append("cover_img", selectedFiles[0]);
    // All files as image (gallery)
    selectedFiles.forEach((file) => {
      formData.append("image", file);
    });

    const res = await dispatch(createMerch(formData));
    if (res?.success) {
      toast.success("Merch item uploaded successfully");
      setNewMerch({ name: "", description: "", price: 0, sizes: [] });
      setSelectedFiles([]);
      dispatch(getMerchs()); // Refresh list
    } else {
      toast.error(res?.message || "Failed to upload merch item");
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      const res = await dispatch(deleteMerch(id));
      if (res?.success) {
        toast.success("Item deleted successfully");
      } else {
        toast.error(res?.message || "Failed to delete item");
      }
    }
  };

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
        .container{max-width:1200px;margin:0 auto;}
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

            <button className="btn" onClick={() => document.getElementById("file-input")?.click()}>Select Files</button>
            {selectedFiles.length > 0 && (
              <div className="stats" style={{ fontSize: 14 }}>
                {selectedFiles.length} file(s) selected
              </div>
            )}     
                                                                                                                                                                                                       
            {/* Inline form fields */}
            <div style={{ width: "100%", maxWidth: 720, display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
              <label style={{ display: "grid", gap: "0.4rem", color: "var(--tan)" }}>
                <span style={{ fontSize: 11, fontFamily: '"Press Start 2P", monospace', textTransform: "uppercase" }}>Name</span>
                <input
                  value={newMerch.name}
                  onChange={(e) => setNewMerch((m) => ({ ...m, name: e.target.value }))}
                  placeholder="Product name"
                  style={{ background: "#0f1016", color: "#fff", border: "2px solid var(--tan)", borderRadius: 6, padding: "0.7rem 0.85rem", width: "100%" }}
                />                                                                                                                                                              
              </label>
              <label style={{ display: "grid", gap: "0.4rem", color: "var(--tan)" }}>
                <span style={{ fontSize: 11, fontFamily: '"Press Start 2P", monospace', textTransform: "uppercase" }}>Price (€)</span>
                <input
                  type="number"
                  min={0}
                  step="0.01"
                  value={newMerch.price}
                  onChange={(e) => setNewMerch((m) => ({ ...m, price: Number(e.target.value) }))}
                  style={{ background: "#0f1016", color: "#fff", border: "2px solid var(--tan)", borderRadius: 6, padding: "0.7rem 0.85rem", width: "100%" }}
                />                                                                                 
              </label>
              <label style={{ display: "grid", gap: "0.4rem", color: "var(--tan)", gridColumn: "1 / -1" }}>
                <span style={{ fontSize: 11, fontFamily: '"Press Start 2P", monospace', textTransform: "uppercase" }}>Description</span>
                <textarea
                  value={newMerch.description}
                  onChange={(e) => setNewMerch((m) => ({ ...m, description: e.target.value }))}
                  placeholder="Enter product description"
                  rows={3}
                  style={{ background: "#0f1016", color: "#fff", border: "2px solid var(--tan)", borderRadius: 6, padding: "0.7rem 0.85rem", width: "100%", resize: "vertical" }}
                />
              </label>
              <div style={{ display: "grid", gap: "0.4rem", color: "var(--tan)", gridColumn: "1 / -1" }}>
                <span style={{ fontSize: 11, fontFamily: '"Press Start 2P", monospace', textTransform: "uppercase" }}>Sizes</span>
                <div style={{ display: "flex", gap: "0.5rem" }}>
                  {["S", "M", "L", "XL"].map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => toggleSize(s)}
                      style={{
                        background: newMerch.sizes.includes(s) ? "var(--yellow2)" : "#0f1016",
                        color: newMerch.sizes.includes(s) ? "#191A22" : "#fff",
                        border: "2px solid var(--tan)",
                        borderRadius: 6,
                        padding: "0.5rem 0.85rem",
                        minWidth: 44,
                        cursor: "pointer",
                        fontWeight: 700,
                        fontSize: 13,
                      }}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <button 
              className="btn" 
              onClick={handleUpload} 
              disabled={isCreatingMerch}
              style={{ marginTop: "0.5rem", background: "var(--yellow)", color: "var(--ink)", display: "flex", alignItems: "center", gap: "0.5rem", fontSize: 14, opacity: isCreatingMerch ? 0.7 : 1 }}
            >
              <UploadArrowIcon /> {isCreatingMerch ? "UPLOADING..." : "UPLOAD MERCH ITEM"}
            </button>
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
                <img className="preview" src={item.prod_image || item.image} alt={item.name} />
                <div style={{ fontSize: 20 }}>{item.name}</div>
                <div className="price" style={{ fontSize: 20 }}>
                  €{item.price}
                </div>
                <div className="sizes" style={{ display: "flex", gap: "8px" }}>
                  {(item.sizes || []).map((s) => (
                    <div className="size" key={s}>
                      {s}
                    </div>
                  ))}
                </div>
                <div
                  className={`stock ${item.stock === "in stock" || item.stock === "In Stock" ? "in" : "out"}`}
                  style={{ fontSize: 20, textTransform: "capitalize" }}
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
                  <button 
                    className="a-btn a-red" 
                    aria-label="Delete"
                    onClick={() => handleDelete(item._id)}
                  >
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

    </div>
  );
}

/* Inline SVGs (no external deps) */
function UploadArrowIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
      <polyline points="17 8 12 3 7 8" />
      <line x1="12" y1="3" x2="12" y2="15" />
    </svg>
  );
}
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