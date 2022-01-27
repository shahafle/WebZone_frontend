import { txtStyle, btnStyle, imgStyle, containerStyle } from '../default-styles';


export const wapHero_6 = {
   "id": "e6a0a2sx",
   "type": "container",
   "category": "wap-hero",
   "className": "wap-hero-6",
   "thumbnail": "http://res.cloudinary.com/dpmzxdfuh/image/upload/v1643278132/jjqqvzdpvfivxbs5odm7.jpg",
   "style": { ...containerStyle, "paddingInline": "0", "paddingBlock": "0", "backgroundColor": "#1c1c1c" },
   "cmps": [
      //HEADER
      {
         "id": "q92665cc",
         "type": "container",
         "style": { ...containerStyle, "paddingInline": "20", "paddingBlock": "20", "backgroundColor": "#ffffff00" },
         "className": "header flex",
         "cmps": [
            {
               "id": "d4s9sd96sd62sd",
               "type": "img",
               "url": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/83b544a8-a1ba-4eb4-918f-05a469363130/d9bkady-3a562d4d-5f8e-48dc-a818-09938f5e48c7.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzgzYjU0NGE4LWExYmEtNGViNC05MThmLTA1YTQ2OTM2MzEzMFwvZDlia2FkeS0zYTU2MmQ0ZC01ZjhlLTQ4ZGMtYTgxOC0wOTkzOGY1ZTQ4YzcucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.uM6uX2uKgFck8wncAF6Q5IpPI4XaOwNBgSDsX6tEiE4",
               "style": { ...imgStyle, "width": "70" }
            },
            //NAV
            {
               "id": "dc265dc",
               "type": "container",
               "style": { ...containerStyle, "paddingInline": "0", "paddingBlock": "0", "backgroundColor": "#ffffff00" },
               "className": "nav flex",
               "cmps": [
                  //Mobile hamburger
                  {
                     "id": "d21d2d2d1sd",
                     "type": "btn",
                     "url": "#",
                     "txt": "Menu",
                     "className": "hamburger",
                     "style": { ...btnStyle, "backgroundColor": "#ffffff00", "color": "#fcfcfc" }
                  },
                  //Nav links
                  {
                     "id": "alsrj2lk3j5tsd",
                     "type": "btn",
                     "url": "#",
                     "txt": "Pricing",
                     "style": { ...btnStyle, "backgroundColor": "#ffffff00", "color": "#fcfcfc" }
                  },
                  {
                     "id": "q8491s",
                     "type": "btn",
                     "url": "#",
                     "txt": "Branches",
                     "style": { ...btnStyle, "backgroundColor": "#ffffff00", "color": "#fcfcfc" }
                  },
                  {
                     "id": "14d8alalal",
                     "type": "btn",
                     "url": "#",
                     "txt": "Community",
                     "style": { ...btnStyle, "backgroundColor": "#ffffff00", "color": "#fcfcfc", "color": "#fcfcfc" }
                  }
               ]
            },
            {
               "id": "cv814vsc219e",
               "type": "btn", // CTA (CENTER)
               "url": "#",
               "txt": "Register Now",
               "className": "cta",
               "style": { ...btnStyle, "backgroundColor": "#ffffff00", "color": "#fcfcfc" }
            }
         ]
      },
      //MAIN CONTENT
      {
         "id": "51efsd821",
         "type": "container",
         "style": { ...containerStyle, "backgroundColor": "#ffffff00", "backgroundImage": "url('https://uploads-ssl.webflow.com/61359e5ac1599d7d5d9fd956/613626d4744e44c81e314178_Banner-bg-p-800.png')", "paddingBlock": "95" },
         "className": "main-content",
         "cmps": [
            //CONTENT (LEFT)
            {
               "id": "bggnmjmc",
               "type": "container",
               "style": { ...containerStyle, "paddingInline": "0", "paddingBlock": "0", "backgroundColor": "#ffffff00" },
               "className": "content flex column",
               "cmps": [
                  {
                     "id": "81df8df",
                     "type": "txt", // MINI-TITLE
                     "txt": "Developer Technology",
                     "style": { ...txtStyle, "color": "#fcfcfc" },
                  },
                  {
                     "id": "1vter1v5",
                     "type": "txt", // MAIN-TITLE
                     "txt": "Online Development Bootcamp",
                     "style": { ...txtStyle, "fontWeight": "700", "fontSize": "46", "fontStyle": "italic", "fontFamily": "bitter", "color": "#fcfcfc" },
                     "className": "h1"
                  },
                  {
                     "id": "y75gm543vb96jh",
                     "type": "txt", // SPAN
                     "txt": "Next course / 04.15.22",
                     "className": "span",
                     "style": { ...txtStyle, "color": "#fcfcfc" },
                  }

               ]
            },
            //PHOTO CONTAINER
            {
               "id": "82454863",
               "type": "container",
               "style": { ...containerStyle, "paddingInline": "0", "paddingBlock": "0", "backgroundColor": "#ffffff00" },
               "className": "image-container",
               "cmps": [
                  //EFFECT DIV
                  {
                     "id": "d20sd5151sd1sd5",
                     "type": "container",
                     "style": { ...containerStyle, "paddingBlock": "61", "paddingInline": "23", "backgroundColor": "#80d324" },
                     "className": "effect",
                     "cmps": []
                  },
                  //IMG
                  {
                     "id": "t6t62t651",
                     "type": "img",
                     "url": "https://images.unsplash.com/photo-1601933563307-c2cd93e9a0f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
                     "style": { ...imgStyle }
                  },
               ]
            }
         ]
      }
   ]

}