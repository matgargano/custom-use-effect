import { useEffect, useState } from "react";
import { set, get } from "../utils/api";

export default function(props) {
  const [saving, setSaving] = useState(false);
  const [content, setContent] = useState("start");

  useEffect(() => {
    if (!saving) {
      return;
    }
    const asyncFunction = async () => {
      await set(content);
      await setSaving(false);
    };
    asyncFunction();
  }, [saving, content]);

  return { saving, content, setContent, setSaving };
}
