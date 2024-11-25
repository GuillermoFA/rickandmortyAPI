/* eslint-disable react/prop-types */
function StatusIcon({ status }) {
  const icons = {
    Alive: "🟢",
    Dead: "🔴",
    unknown: "🔵",
  };
  return <span>{icons[status] || "🔵"}</span>;
}

export default StatusIcon;
