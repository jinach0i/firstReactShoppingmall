import {useDispatch, useSelector} from 'react-redux';
import {changeName} from '../store';

function Cart() {
    let state=useSelector((state)=>state);
    let dispatch=useDispatch();
    return (
        <div className='cart-wrap'>
            
            <header id='header'>
                <nav className='gnb'>
                    <div className='inner'>
                        <div className='left'><a href="#" className='back'>👈</a><h6><a href="#" className='cart-home'>{state.user}의 장바구니</a></h6><button onClick={() => {
                dispatch(changeName())
            }}>+</button></div>
                        <div className='right'>
                            <button>결제내역</button>
                            <button>메뉴</button>
                        </div>
                    </div>
                </nav>
                <nav className='lnb'></nav>
            </header>
            <div className='checkall'></div>
            <main className='contents'>
                {state.cart.map((a,i) =>
                    <div key={i} className="card">
                        <div className='store-header'>가게명</div>
                        <div className='store-content'>
                            <div className='basic-info'>
                                <img src="" alt="thumbnail" />
                                <div>{state.cart[i].name}</div>
                            </div>
                            <div>금액</div>
                            <div>배송비</div>
                        </div>
                        <div className='price-panel'>
                            <div className='calcuration'></div>
                            <button>1건 주문하기</button>
                            </div>
                    </div>
                )}
            </main>
            <div className=''></div>
            <footer></footer>
        </div>
    )
}
export default Cart;