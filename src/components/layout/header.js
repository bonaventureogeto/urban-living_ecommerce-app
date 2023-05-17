import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import LoginIcon from '@mui/icons-material/Login';
import { BedOutlined, DiningOutlined, KitchenOutlined, LivingOutlined, MapsHomeWorkOutlined } from '@mui/icons-material';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';
import { Link } from 'react-router-dom';
import "./Header.css"

const Header = () => {
  return (
    <>
      <div className='alert'>
        <h5 className='alert-1'>We currently do not support shipping or delivery. <strong>COMING SOON</strong></h5>
      </div>

          <div className='header-container'>
            <div className='logo-container'>
            <Link to="/">
              <img src='https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/f0947d102336539.5f341d2eb6ca2.jpg' 
                    alt='Urban Living Logo' 
                    className='site-logo'/>
            </Link>
              
            </div>
            
              <div className='categories'>
                <p>Shop <br/>By <u>Categories</u></p>
                <div className='drop-down-list'>
                  <div className='room'>
                    <Link to='livingroom'>
                      <LivingOutlined/>
                      <p>Living Room</p>
                      <ArrowRightOutlinedIcon/>
                    </Link>     
                  </div>

                  <div className='room'>
                    <Link to="/bedroom">
                      <BedOutlined/>
                      <p>Bed Room</p>
                      <ArrowRightOutlinedIcon/>
                    </Link>  
                  </div>
                  <div className='room'>
                    <Link to="/diningroom">
                    <DiningOutlined/>
                    <p>Dining Room</p>
                    <ArrowRightOutlinedIcon/>
                    </Link>
                  </div>
                  <div className='room'>
                  <Link to="/kitchen">
                    <KitchenOutlined/>
                    <p>Kitchen</p>
                    <ArrowRightOutlinedIcon/>
                  </Link>   
                  </div>
                  <div className='room'>
                  <Link to="/office">
                    <MapsHomeWorkOutlined/>
                    <p>Office</p>
                    <ArrowRightOutlinedIcon/>
                  </Link>
                  </div>
                </div>
              </div>
              
              <div className='components'>
                  <div className='component'>
                  <Link to="ideas">
                    <AddToPhotosIcon className='icon'/>
                    <h6>Ideas</h6>
                  </Link>
                    <div className='component-drop-down'>
                    </div>
                  </div>

                  <div className='component'>
                    <h6>Shop</h6>
                    <KeyboardArrowDownIcon className='drop-down'/>
                    <div className='drop-down-list-2'>
                      <div className='departments'>
                        <div className='rooms'>
                          <h4>Rooms</h4>
                          <Link to="/livingroom">
                            <p>Living Room</p>
                          </Link>

                          <Link to="/kitchen">
                            <p>Kitchen</p>
                          </Link>

                          <Link to="/bedroom">
                            <p>Bedroom</p>
                          </Link> 
                          <Link to="/office">
                            <p>Office</p>
                          </Link>                                                  
                        </div>
                        <div className='categories'>
                          <h4>Categories</h4>
                          <p>Sofas</p>
                          <p>Beds</p>
                          <p>Tables</p>
                          <p>Chairs</p>
                        </div>
                        <div className='collections'>
                          <h4>Collections</h4>
                          <p>Japanese,Minimalsim</p>
                          <p>Modern,Industrial</p>
                          <p>Valebeck, Modern</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className='component'>
                  <Link to="/collections">
                    <h6>Collections</h6>
                  </Link>
                  </div>
              </div>

              <div className='header_search'>
                <input className="header_input" type="text" />
                <SearchIcon className="search_icon" />
              </div>

              <div className='login-section'>
                <Link to="/login">
                  <LoginIcon className='login-icon'/> 
                </Link>
                <p>Hello, <br/><em>Login/Register</em></p>
              </div>

              <div className='shopping-basket'>
                <ShoppingBasketIcon className='shopping-basket-icon'/>
              </div>

          </div>
          
    
    </>
  )
}

export default Header;
