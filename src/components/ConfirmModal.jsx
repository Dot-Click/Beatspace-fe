import React from 'react';

export default function ConfirmModal({ isOpen, title, message, onConfirm, onCancel }) {
  if (!isOpen) return null;

  return (
    <div style={{
      position: "fixed", inset: 0, background: "rgba(0,0,0,0.85)",
      display: "flex", justifyContent: "center", alignItems: "center",
      zIndex: 2000, padding: "1rem"
    }} onClick={onCancel}>
      <div className="alexandria-font" style={{
        background: "#2F2D0E", border: "2px solid #CBC895",
        borderRadius: "8px", width: "100%", maxWidth: "400px",
        padding: "2rem", position: "relative", boxShadow: "0 10px 25px rgba(0,0,0,0.8)",
        color: "#ffffff"
      }} onClick={e => e.stopPropagation()}>
        <h2 className="pixel" style={{ color: "#EBE23C", marginBottom: "1rem", fontSize: "16px", lineHeight: "1.5", fontFamily: '"Press Start 2P"' }}>{title}</h2>
        <p style={{ marginBottom: "2rem", fontSize: "14px", lineHeight: "1.5", fontFamily: "monospace", opacity: 0.9 }}>{message}</p>
        <div style={{ display: "flex", gap: "1rem", justifyContent: "flex-end" }}>
          <button 
            onClick={onCancel}
            style={{ 
              background: "transparent", border: "2px solid #CBC895", color: "#ffffff", 
              padding: "0.5rem 1rem", borderRadius: "8px", cursor: "pointer", fontWeight: "bold" 
            }}
          >
            CANCEL
          </button>
          <button 
            onClick={() => { onConfirm(); onCancel(); }}
            style={{ 
              background: "#EB181B", border: "none", color: "#ffffff", 
              padding: "0.5rem 1rem", borderRadius: "8px", cursor: "pointer", fontWeight: "bold",
              boxShadow: "0 3px 2px 0 #000"
            }}
            onMouseDown={(e) => { e.currentTarget.style.transform = "translateY(2px)"; e.currentTarget.style.boxShadow = "0 1px 2px 0 #000"; }}
            onMouseUp={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 3px 2px 0 #000"; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 3px 2px 0 #000"; }}
          >
            CONFIRM
          </button>
        </div>
      </div>
    </div>
  );
}
