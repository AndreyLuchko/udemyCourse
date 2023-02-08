import { Component } from 'react';
import Button from 'react-bootstrap/Button';

class CoffeeFilter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      newsortArr: []
    }
  }

  onFilter = (e) => {
    const { newsortArr } = this.state,
      newActive = e.target.classList.contains('active'),
      text = e.target.innerText,
      addText = [...newsortArr, text],
      removeText = newsortArr.filter(item => item !== text);

    if (newActive) {
      this.setState(({ newsortArr }) => {
        return {
          newsortArr: [...newsortArr, text]
        }
      })
      this.props.onUpdateFilter(addText);
    } else {
      this.setState(({ newsortArr }) => ({
        newsortArr: newsortArr.filter(item => item !== text)
      }))
      this.props.onUpdateFilter(removeText);
    }
  }

  render() {

    const { sortArr } = this.props,
          style = { boxShadow: '4px 4px 20px rgba(0, 0, 0, 0.25)', borderRadius: '4px' },
          arrBtn = ['Brazil', 'Kenya', 'Columbia'];

    const buttons = arrBtn.map(item => {
      const active = sortArr.includes(item),
            clazz = active ? ' active' : '';

      return (
        <Button
          variant=''
          className={clazz}
          style={style}
          key={item}
          onClick={(e) => {
            e.target.classList.toggle('active')
            this.onFilter(e);
          }}>
          {item}
        </Button>
      )
    })

    return (
      <>
        <label className='align-items-center d-inline-flex gap-2'>Or filter
          {buttons}
        </label>
      </>
    )
  }
}

export default CoffeeFilter;