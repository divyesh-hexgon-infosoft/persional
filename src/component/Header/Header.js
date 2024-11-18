import React from 'react'
import SocialLink from './SocialLink'
import './Style.css'
import links from './links';
import {fontcolor,titlecolor} from '../fontcolor';
export default function Header() {
  return (
    <div>
      <div>
        <div>
          <center>
          
            {/* <h1><b> <font color={fontcolor}>Fenil</font> Domadiya</b></h1> */}
            {/* <h1>Fenil<b> Domadiya</b></h1> */}
            {/* <h1><b><font color={fontcolor}>Fenil Domadiya</font></b></h1> */}
            <h1 style={{color:titlecolor}}>Divyesh Parmar</h1>
          </center>
        </div>
        <div>
          <center>
            {/* <SocialLink style = "textsize bi-phone-fill headerlink" link ={links.mobilenumber} pname ={links.mobilenumber} /> &nbsp;&nbsp; | &nbsp;&nbsp;
            <SocialLink style = "textsize bi-envelope-fill headerlink" link ={links.email} name ={links.email}/> &nbsp;&nbsp; | &nbsp;&nbsp;
            <SocialLink style = "textsize bi-linkedin headerlink" link ={links.linkedin}/> &nbsp;&nbsp; | &nbsp;&nbsp;
            <SocialLink style = "textsize bi-github headerlink" link ={links.github}/>  */}
            {/* <br/> */}
            <a className=" textsize bi-phone-fill headerlink"> (+91)9328487662</a> &nbsp;&nbsp; | &nbsp;&nbsp;
            <a className=" textsize bi-envelope-fill headerlink"> divyeshparmar112001@gmail.com
            </a>&nbsp;&nbsp; | &nbsp;&nbsp;
            <a className=" textsize bi-linkedin  headerlink"
              href="https://linkedin.com/in/divyeshparmar26/"> divyeshparmar26 </a>
            
            {/* <a className=" textsize bi-linkedin  headerlink"
              href="https://linkedin.com/in/fenil-domadiya/"> fenil-domadiya</a>&nbsp;&nbsp; | &nbsp;&nbsp;
            <a className=" textsize bi-github  headerlink"
              href="https://github.com/fad1105/"> fad1105</a> */}
            <br />
            {/* <a className=" textsize headerlink codingprofilephoto " href="https://www.codechef.com/users/fad1105">
              <img
              src="/siteimage/code_chef.png" className='codingprofilephoto' /> CodeChef : fad1105</a>&nbsp; | &nbsp;
            <a className=" textsize headerlink codingprofilephoto " href="https://leetcode.com/fad1105/"><img
              src="/siteimage/leet_code.png" className='codingprofilephoto' /> Leetcode : fad1105</a>&nbsp; | &nbsp;
            <a className=" textsize headerlink codingprofilephoto " href="https://www.hackerrank.com/fad1105"><img
              src="/siteimage/hacker_rank.png" className='codingprofilephoto' /> HackerRank : fad1105</a> */}
            <a className=" textsize headerlink codingprofilephoto " href="https://www.codechef.com/users/goku_261">
              <img
              src="/siteimage/codechef1.png" className='codingprofilephoto' /> CodeChef : goku_261</a>&nbsp; | &nbsp;
            <a className=" textsize headerlink codingprofilephoto " href="https://leetcode.com/divyesh_parmar/"><img
              src="/siteimage/leetcode1.png" className='codingprofilephoto' /> Leetcode : divyesh_parmar</a>&nbsp; | &nbsp;
            {/* <a className=" textsize headerlink codingprofilephoto " href="https://www.hackerrank.com/fad1105"><img
              src="/siteimage/hackerrank1.png" className='codingprofilephoto' /> HackerRank : fad1105</a> */}
            {/* &nbsp; | &nbsp; */}
            <a className=" textsize bi-github  headerlink"
              href="https://github.com/divyesh2611/"> Github : divyesh2611</a>
          </center>
        </div>
      </div>
    </div>
  )
}
