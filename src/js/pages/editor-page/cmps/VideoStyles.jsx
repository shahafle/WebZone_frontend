export function VideoStyles({ element, onChangeAttr }) {

   const onSetUrl = (ev) => {
      ev.target.value = embedUrl(ev.target.value);
      onChangeAttr(ev)
   }

   const embedUrl = (url) => {
      if (!url) return;
      let newUrl = url.replace('https://www.youtube.com/watch?v=', 'https://www.youtube.com/embed/');
      const idx = newUrl.indexOf('&ab_');
      if (idx !== -1) newUrl = newUrl.substring(0, idx);
      return newUrl;
   }

   return <div className="flex column style-inputs">
      <label>Youtube link</label>
      <input className="url-input" onChange={(ev) => onSetUrl(ev)} value={element.url} type="url" name='url' />
   </div>
}