import PropTypes from 'prop-types'

const MyComponent = (props) => {
   const { name, forNumber, children } = props
   return (
      <div>
         <div>안녕하세요. 제 이름은 {name} 입니다.</div> <br />
         칠드런 값은 {children} 입니다.
         <br />
         좋아하는 숫자는 {forNumber} 입니다.
      </div>
   )
}

MyComponent.defaultProps = {
   name: '기본이름',
}

MyComponent.propTypes = {
   name: PropTypes.string,
   forNumber: PropTypes.number.isRequired,
}

export default MyComponent
