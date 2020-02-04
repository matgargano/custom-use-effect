import React, { useEffect, useState } from "react";
import Save from "./foobar";

export default function() {
  const { saving, content, setContent, setSaving } = Save();
  if (saving) {
    return <div>LOADING</div>;
  }

  return (
    <>
      <textarea onChange={e => setContent(e.target.value)}>
        {content || ""}
      </textarea>
      <input type="button" onClick={() => setSaving(true)} value="Save" />
      {content}
    </>
  );
}
