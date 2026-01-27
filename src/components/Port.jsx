import React from 'react';
import Port1 from "../assets/img/port_1.png";
import Port2 from "../assets/img/port_2.png";
import Port3 from "../assets/img/port_3.png";
import Port4 from "../assets/img/port_4.png";
import Port5 from "../assets/img/port_5.png";
import Port6 from "../assets/img/port_6.png";

const Port = () => {
  return (
    <section id="port">
      <div className="port_inner">
        <div className="port_title">
          portfolio <em>작업물</em>
        </div>
        <div className="port_wrap">
          <article className="port_item p1">
            <span className='num'>01.</span>
            <a href="/" target='_blank' className='img'>
              <img src={Port1} alt="포폴이미지1" />
            </a>
            <h3 className='title'>A팀 프로젝트</h3>
            <div className="desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit nam inventore doloremque deserunt. Dolore delectus, 
            </div>
            <a href="/" target='blank' className='site' rel='noreferrer noopener'>사이트보기</a>
            {/* noreferrer: 정보보완용 -> 사용자가 링크를 클릭햇을때 어디서 왔는지 정보가 전달되게해주는 경로를 숨겨줌 */}
            {/* noopener: 보안용->차단,해킹,피싱 방지 */}
          </article>
          <article className="port_item p2">
            <span className='num'>02.</span>
            <a href="/" target='_blank' className='img'>
              <img src={Port2} alt="포폴이미지1" />
            </a>
            <h3 className='title'>A팀 프로젝트</h3>
            <div className="desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit nam inventore doloremque deserunt. Dolore delectus, 
            </div>
            <a href="/" target='blank' className='site' rel='noreferrer noopener'>사이트보기</a>
            {/* noreferrer: 정보보완용 -> 사용자가 링크를 클릭햇을때 어디서 왔는지 정보가 전달되게해주는 경로를 숨겨줌 */}
            {/* noopener: 보안용->차단,해킹,피싱 방지 */}
          </article>
          <article className="port_item p3">
            <span className='num'>03.</span>
            <a href="/" target='_blank' className='img'>
              <img src={Port3} alt="포폴이미지3" />
            </a>
            <h3 className='title'>A팀 프로젝트</h3>
            <div className="desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit nam inventore doloremque deserunt. Dolore delectus, 
            </div>
            <a href="/" target='blank' className='site' rel='noreferrer noopener'>사이트보기</a>
            {/* noreferrer: 정보보완용 -> 사용자가 링크를 클릭햇을때 어디서 왔는지 정보가 전달되게해주는 경로를 숨겨줌 */}
            {/* noopener: 보안용->차단,해킹,피싱 방지 */}
          </article>
          <article className="port_item p4">
            <span className='num'>04.</span>
            <a href="/" target='_blank' className='img'>
              <img src={Port4} alt="포폴이미지4" />
            </a>
            <h3 className='title'>A팀 프로젝트</h3>
            <div className="desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit nam inventore doloremque deserunt. Dolore delectus, saepe maxime officia vel ea officiis odit, dolores, reiciendis nisi id alias laudantium sit voluptas.
            </div>
            <a href="/" target='blank' className='site' rel='noreferrer noopener'>사이트보기</a>
            {/* noreferrer: 정보보완용 -> 사용자가 링크를 클릭햇을때 어디서 왔는지 정보가 전달되게해주는 경로를 숨겨줌 */}
            {/* noopener: 보안용->차단,해킹,피싱 방지 */}
          </article>
          <article className="port_item p5">
            <span className='num'>05.</span>
            <a href="/" target='_blank' className='img'>
              <img src={Port5} alt="포폴이미지5" />
            </a>
            <h3 className='title'>A팀 프로젝트</h3>
            <div className="desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit nam inventore doloremque deserunt. Dolore delectus, 
            </div>
            <a href="/" target='blank' className='site' rel='noreferrer noopener'>사이트보기</a>
            {/* noreferrer: 정보보완용 -> 사용자가 링크를 클릭햇을때 어디서 왔는지 정보가 전달되게해주는 경로를 숨겨줌 */}
            {/* noopener: 보안용->차단,해킹,피싱 방지 */}
          </article>
          <article className="port_item p6">
            <span className='num'>06.</span>
            <a href="/" target='_blank' className='img'>
              <img src={Port6} alt="포폴이미지6" />
            </a>
            <h3 className='title'>A팀 프로젝트</h3>
            <div className="desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit nam inventore doloremque deserunt. Dolore delectus, saepe maxime officia vel ea officiis odit, dolores, reiciendis nisi id alias laudantium sit voluptas.
            </div>
            <a href="/" target='blank' className='site' rel='noreferrer noopener'>사이트보기</a>
            {/* noreferrer: 정보보완용 -> 사용자가 링크를 클릭햇을때 어디서 왔는지 정보가 전달되게해주는 경로를 숨겨줌 */}
            {/* noopener: 보안용->차단,해킹,피싱 방지 */}
          </article>

        </div>
      </div>
    </section>

  )
}

export default Port
