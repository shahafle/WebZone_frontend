export async function uploadImgToCloud(ev) {
   const CLOUD_NAME = 'dpmzxdfuh'
   const UPLOAD_URL = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`

   const formData = new FormData();
   formData.append('file', ev.target.files[0])
   formData.append('upload_preset', 'brixRNS');

   try {

      let res = await fetch(UPLOAD_URL, {
         method: 'POST',
         body: formData
      })
      res = await res.json();

      return res.url;

   } catch (err) {
      console.error(err)
   }
}
