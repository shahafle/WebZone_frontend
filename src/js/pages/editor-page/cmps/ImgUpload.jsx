export function ImgUpload({ elementStyle, onChangeStyle }) {

    const onSearchImg = () => {
        console.log('hi');
    }

    return (<div>
        <label> Upload Background Image
            <input type="file" placeholder="Upload Background" onChange={onChangeStyle} name="backgroundImage" value={elementStyle.backgroundImage} />
        </label>
        <label>
            <input type="search" placeholder="serach image" onChange={onSearchImg} name="backgroundImage" value={elementStyle.backgroundImage} />
        </label>
    </div>
    )
}