import { AppProduct } from './components/AppProduct/AppProduct'


export const App = () => {

  return (
    <div style={{
        display: 'flex', 
        flexDirection:"column",
        gap:"3rem"}}>

        <AppProduct />

    </div>
  )
}