export const DogImage = props => {
  // Check if props is defined and if it has a dogUrl property

  return (
    <>
    <div>
      <p>dog</p>
      <img src={props.imageUrl} alt="" />
      </div>
      </>
  )
}

