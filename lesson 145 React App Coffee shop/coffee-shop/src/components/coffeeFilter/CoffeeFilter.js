import Button from 'react-bootstrap/Button';

function CoffeeFilter() {
  const style = { boxShadow: '4px 4px 20px rgba(0, 0, 0, 0.25)', borderRadius: '4px'}
  return (
    <>
      <label className='align-items-center d-inline-flex gap-2'>Or filter
        <Button variant='' style={style} active>Brazil</Button>{' '}
        <Button variant='' style={style}>Kenya</Button>{' '}
        <Button variant='' style={style}>Columbia</Button>{' '}
      </label>

    </>
  )
}

export default CoffeeFilter;