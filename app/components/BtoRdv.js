import Link from "next/link";

export default function RdvButton() {
  return (
    <Link
      href="https://www.crenolibre.fr/moteur/124911_durindel-cecile"
      target="_blank"
      rel="noopener noreferrer"
      className="crenolib"
      style={{
        display: "block",
        textAlign: "center",
        backgroundColor: "#41AB8A",
        color: "#ffffff",
        fontSize: "15px",
        overflow: "hidden",
        width: "315px",
        height: "50px",
        position: "fixed",
        bottom: "0",
        right: "5px",
        zIndex: 1000,
        borderTopLeftRadius: "4px",
        borderTopRightRadius: "4px",
        lineHeight: "50px",
        // borderBottomRightRadius and borderBottomLeftRadius intentionally omitted
      }}
    >
      <span style={{ fontSize: "15px" }}>RDV à domicile</span>
    </Link>
  );
}
