import React, { useState, useRef, useMemo } from 'react';
import JoditEditor from 'jodit-react';

const MyEditor = ({ placeholder }) => {
  const editor = useRef(null);
  const [editorContent, setEditorContent] = useState('');

  const config = useMemo(
    () => ({
      readonly: false,
      height: 400,
      placeholder: placeholder || 'Start typing...',
      controls: {
    font: {
      list: {
        'General Sans': 'General Sans',
        'Manrope': 'Manrope',
        'Arial': 'Arial',
        'Georgia': 'Georgia',
        'Times New Roman': 'Times New Roman'
      }
    }
  },
  style: {
    fontFamily: 'General Sans' // Default font inside editor
  }
    }),
    [placeholder]
  );

  return (
    <div className="p-4">
      <JoditEditor
        ref={editor}
        value={editorContent}
        config={config}
        tabIndex={1}
        onBlur={(newContent) => setEditorContent(newContent)} // Update on blur
        onChange={(newContent) => setEditorContent(newContent)} // Prevent excessive updates on every keystroke
      />

      <div className="mt-4 p-2 border rounded bg-gray-50">
        <h3 className="font-semibold mb-2">Editor Output:</h3>
        <div>
            {editorContent}
        </div>
      </div>
    </div>
  );
};

export default MyEditor;
