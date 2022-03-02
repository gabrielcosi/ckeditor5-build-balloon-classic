/**
 * @license Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

// The editor creator to use.
import BalloonEditorBase from "@ckeditor/ckeditor5-editor-balloon/src/ballooneditor";
import ClassicEditorBase from "@ckeditor/ckeditor5-editor-classic/src/classiceditor";
import BalloonBlockEditor from "@ckeditor/ckeditor5-editor-balloon/src/ballooneditor";

import Essentials from "@ckeditor/ckeditor5-essentials/src/essentials";
import UploadAdapter from "@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter";
import Autoformat from "@ckeditor/ckeditor5-autoformat/src/autoformat";
import Bold from "@ckeditor/ckeditor5-basic-styles/src/bold";
import Italic from "@ckeditor/ckeditor5-basic-styles/src/italic";
import BlockQuote from "@ckeditor/ckeditor5-block-quote/src/blockquote";
import CKFinder from "@ckeditor/ckeditor5-ckfinder/src/ckfinder";
import EasyImage from "@ckeditor/ckeditor5-easy-image/src/easyimage";
import Heading from "@ckeditor/ckeditor5-heading/src/heading";
import Image from "@ckeditor/ckeditor5-image/src/image";
import ImageCaption from "@ckeditor/ckeditor5-image/src/imagecaption";
import ImageStyle from "@ckeditor/ckeditor5-image/src/imagestyle";
import ImageToolbar from "@ckeditor/ckeditor5-image/src/imagetoolbar";
import ImageInsert from "@ckeditor/ckeditor5-image/src/imageinsert";
import Indent from "@ckeditor/ckeditor5-indent/src/indent";
import Link from "@ckeditor/ckeditor5-link/src/link";
import List from "@ckeditor/ckeditor5-list/src/list";
import MediaEmbed from "@ckeditor/ckeditor5-media-embed/src/mediaembed";
import Paragraph from "@ckeditor/ckeditor5-paragraph/src/paragraph";
import PasteFromOffice from "@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice";
import Table from "@ckeditor/ckeditor5-table/src/table";
import TableToolbar from "@ckeditor/ckeditor5-table/src/tabletoolbar";
import TextTransformation from "@ckeditor/ckeditor5-typing/src/texttransformation";
import Code from "@ckeditor/ckeditor5-basic-styles/src/code";
import CodeBlock from "@ckeditor/ckeditor5-code-block/src/codeblock";
import HtmlEmbed from "@ckeditor/ckeditor5-html-embed/src/htmlembed";

class BalloonEditor extends BalloonEditorBase {}
class ClassicEditor extends ClassicEditorBase {}
class BalloonBlockEditor extends BalloonBlockEditor {}

const plugins = [
  Essentials,
  UploadAdapter,
  Autoformat,
  Bold,
  Italic,
  BlockQuote,
  CKFinder,
  EasyImage,
  Heading,
  Image,
  ImageCaption,
  ImageStyle,
  ImageToolbar,
  ImageInsert,
  Indent,
  Link,
  List,
  MediaEmbed,
  Paragraph,
  PasteFromOffice,
  Table,
  TableToolbar,
  TextTransformation,
  Code,
  CodeBlock,
  HtmlEmbed,
];
// Plugins to include in the build.
ClassicEditor.builtinPlugins = plugins;
BalloonEditor.builtinPlugins = plugins;
BalloonBlockEditor.builtinPlugins = plugins;

const config = {
  toolbar: {
    items: [
      "heading",
      "|",
      "bold",
      "italic",
      "link",
      "bulletedList",
      "numberedList",
      "|",
      "code",
      "codeBlock",
      "|",
      "htmlEmbed",
      "|",
      "imageInsert",
      "blockQuote",
      "insertTable",
      "mediaEmbed",
      "undo",
      "redo",
      "|",
      "indent",
      "outdent",
    ],
  },
  image: {
    toolbar: [
      "imageStyle:full",
      "imageStyle:side",
      "|",
      "imageTextAlternative",
    ],
  },
  table: {
    contentToolbar: ["tableColumn", "tableRow", "mergeTableCells"],
  },
  // codeBlock: {
  // 	languages: [
  // 		{ language: 'css', label: 'CSS' },
  // 		{ language: 'html', label: 'HTML' }
  // 	]
  // },
  // This value must be kept in sync with the language defined in webpack.config.js.
  language: "en",
};
// Editor configuration.
BalloonEditor.defaultConfig = config;
ClassicEditor.defaultConfig = config;
BalloonBlockEditor.defaultConfig = config;

export default {
  ClassicEditor,
  BalloonEditor,
  BalloonBlockEditor,
};
