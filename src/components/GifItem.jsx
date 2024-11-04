
export const GifItem = ({title,url}) => {
  return (
    <div className="card">
    <img src={url} alt="Image"  />
    <p>{title}</p>
    </div>
  )
}
