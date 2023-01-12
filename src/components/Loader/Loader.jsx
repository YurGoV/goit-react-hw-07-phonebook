import {Rings} from 'react-loader-spinner';

export const Loader = () => {
  return (
    <div>
      <Rings
        height='25'
        width='25'
        color="#3f51b5"
        radius="6"
        wrapperStyle={{}}
        wrapperClass=""
        // visible={loader}
        ariaLabel="rings-loading"
      />
    </div>
  )
}
