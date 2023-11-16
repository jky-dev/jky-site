interface InfoWithImageProps {
  title: string
  subtitle: string
  paragraph: string
  imagePath: string
  imageLocation?: 'before' | 'after'
}

interface ContentProps {
  title: string
  subtitle: string
  paragraph: string
}

interface ImageRenderProps {
  imagePath: string
}

const ImageRender = ({ imagePath }: ImageRenderProps) => {
  return <div className='text-center'>Image</div>
}

const Content = ({ title, subtitle, paragraph }: ContentProps) => {
  return (
    <div className=''>
      <h2>{title}</h2>
      <h4 className='altColor mb-12'>{subtitle}</h4>
      <p>{paragraph}</p>
    </div>
  )
}

const InfoWithImage = ({
  title,
  subtitle,
  paragraph,
  imagePath,
  imageLocation = 'before',
}: InfoWithImageProps) => {
  return (
    <>
      <div className='grid grid-cols-2 gap-6'>
        {imageLocation === 'before' ? (
          <>
            <ImageRender imagePath={imagePath} />
            <Content title={title} subtitle={subtitle} paragraph={paragraph} />
          </>
        ) : (
          <>
            <Content title={title} subtitle={subtitle} paragraph={paragraph} />
            <ImageRender imagePath={imagePath} />
          </>
        )}
      </div>
    </>
  )
}

export default InfoWithImage
