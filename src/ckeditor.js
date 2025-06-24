import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor.js';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold.js';
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials.js';
import Heading from '@ckeditor/ckeditor5-heading/src/heading.js';
import Image from '@ckeditor/ckeditor5-image/src/image.js';
import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload.js';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic.js';
import Link from '@ckeditor/ckeditor5-link/src/link.js';
import List from '@ckeditor/ckeditor5-list/src/list.js';
import MediaEmbed from '@ckeditor/ckeditor5-media-embed/src/mediaembed.js';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph.js';
import SimpleUploadAdapter from '@ckeditor/ckeditor5-upload/src/adapters/simpleuploadadapter.js';
import Strikethrough from '@ckeditor/ckeditor5-basic-styles/src/strikethrough.js';
import Table from '@ckeditor/ckeditor5-table/src/table.js';
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar.js';
import TextTransformation from '@ckeditor/ckeditor5-typing/src/texttransformation.js';
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline.js';
import WordCount from '@ckeditor/ckeditor5-word-count/src/wordcount.js';
import fontSize from '@ckeditor/ckeditor5-font/src/fontsize.js';
import blockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote.js';
import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice';
import BalloonToolbar from '@ckeditor/ckeditor5-ui/src/toolbar/balloon/balloontoolbar';
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar.js';
import ImageTextAlternative from '@ckeditor/ckeditor5-image/src/imagetextalternative.js';

class Editor extends ClassicEditor {}

// Plugins to include in the build.
Editor.builtinPlugins = [
	Bold,
	Essentials,
	Heading,
	Image,
	ImageUpload,
	Italic,
	Link,
	List,
	MediaEmbed,
	Paragraph,
	SimpleUploadAdapter,
	Strikethrough,
	Table,
	TableToolbar,
	TextTransformation,
	Underline,
	WordCount,
	fontSize,
	blockQuote,
	PasteFromOffice,
	BalloonToolbar,
	ImageToolbar,
	ImageTextAlternative
];

// Editor configuration.
Editor.defaultConfig = {
	toolbar: {
		items: [
			'heading',
			'|',
			'fontSize',
			'|',
			'bold',
			'italic',
			'underline',
			'strikethrough',
			'link',
			'|',
			'bulletedList',
			'numberedList',
			"blockQuote",
			'|',
			'imageUpload',
			'insertTable',
			'|',
			'undo',
			'redo'
		]
	},
	language: 'en',
	table: {
		contentToolbar: [
			'tableColumn',
			'tableRow',
			'mergeTableCells'
		]
	},
	pasteFromOffice: {
		keepInlineStyles: true,
		allowWordPaste: true
	},
	balloonToolbar: {
		items: [
			'heading',
			'|',
			'fontSize',
			'|',
			'bold',
			'italic',
			'underline',
			'strikethrough',
			'link',
			'|',
			'bulletedList',
			'numberedList',
			"blockQuote",
			'|',
			'imageUpload',
			'insertTable',
			'|',
			'undo',
			'redo'
		]
	},
	image: {
		toolbar: [
			'imageStyle:block',
			'imageStyle:side',
			'|',
			'toggleImageCaption',
			'imageTextAlternative',
			'|',
			'linkImage'
		]
	},
};

export default Editor;
