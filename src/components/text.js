import React from "react";
import Save from "./foobar";

export default function() {
  const { saving, content, setContent, setSaving } = Save();
  if (saving) {
    return <div>LOADING</div>;
  }

  return (
    <>
      <input
        type="text"
        onChange={e => setContent(e.target.value)}
        value={content || ""}
      />
      <input type="button" onClick={() => setSaving(true)} value="Save" />
      {content}
    </>
  );
}
