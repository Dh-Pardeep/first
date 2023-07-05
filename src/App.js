import './App.css';
import moon from './assets/img/svg/moon.svg'
import SmartContract from './assets/img/svg/SmartContract.svg'

function App() {
  return (
    <>
      {/* *************section_1***************** */}
      <section className='bg_color flex justify_center min_h_100vh align_items'>
        <div className='container'>
          <div className='row justify_center'>
            <div className='col_9  col_lg_3 col_md_4 col_sm_5'>
              <div className='relative box_1 c_pointer'>
                <img className='absolute' src={moon} />
                <div className='border_box' >
                  <img src={SmartContract} />
                  <h2 className='smart_h2'>Smart Contract </h2>
                  <p className='para_3'>Eu faucibus libero leo, malesuada justo, tortor pellentesque quis sit. Dui viverra at odio sodales duis integer rhoncus pulvinar. Commodo massa aliquam.</p>
                </div>
              </div>
            </div>
            <div className='col_9 col_lg_3 col_md_4 col_sm_5'>
              <div className='relative box_1 c_pointer'>
                <img className='absolute' src={moon} />
                <div className='border_box'>
                  <img src={SmartContract} />
                  <h2 className='smart_h2'>Proof</h2>
                  <p className='para_3'>Nisl, sed morbi porta orci nunc. Curabitur vitae hendrerit justo ultricies quam vitae pellentesque tellus felis. Elementum tortor quis est morbi ullamcorper. </p>
                </div>
              </div>
            </div>
            <div className='col_9 col_lg_3 col_md_4 col_sm_5'>
              <div className='relative box_1 c_pointer'>
                <img className='absolute' src={moon} />
                <div className='border_box' >
                  <img src={SmartContract} />
                  <h2 className='smart_h2'>NFT solutions</h2>
                  <p className='para_3'>Id nam massa sit ut purus tortor est ultrices nunc. Ipsum, nibh egestas vehicula tellus. Molestie adipiscing diam nibh lectus. Magna id nisl quis vestibulum.</p>
                </div>
              </div>
            </div>
            <div className='col_9 col_lg_3 col_md_4 col_sm_5'>
              <div className='relative box_1 c_pointer'>
                <img className='absolute' src={moon} />
                <div className='border_box'>
                  <img src={SmartContract} />
                  <h2 className='smart_h2'>Support</h2>
                  <p className='para_3'>Tellus id et fringilla auctor. Ac viverra ullamcorper nec, senectus at nulla. Metus sem egestas volutpat cras phasellus cursus augue sagittis, enim. Sit et cras.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* *********section_2*********** */}
      <section>
        <div className='container'>
          <div class="gradient-box c_pointer">
            <div>
              <div className='flex align_center '>
                <div>
                  <h2 className='heading_1 mb_10px'>
                    NFT Holders
                  </h2>
                </div>
                <div>
                  <h3 className='heading_2'>
                    70%
                  </h3>
                </div>
              </div>
              <p className='para_1'>NFT Holders will earn $TNAT via p2e mechanism.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
