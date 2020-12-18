import React,{useEffect, useState} from 'react'
import axios from 'axios'
import { Button } from 'src/components/shared.components'
import { HeroContainer, HeroBg, ImageBg, HeroH1, HeroP, HeroBtnWrapper, HeroBottomComponents, HeroContentWrapper, HeroContentColumn1, HeroContentColumn2, BottomContentTitle, BottomContentWrapper, HeroContentBody, BottomContentBg, BottomContent, Img} from './hero.elements'
import Flicking from "@egjs/react-flicking"
import "./style.css"

export default function Hero({width, heroGradientOpacity, TopHeroComp , bottomHeroComp, buttonText1, buttonText2, heroTitle, heroDesc, heroDisplay, heroBg, heroFontSizeDesc, heroHeight}) {
  const [partner, setPartner] = useState([])

  useEffect(()=>{
    axios.get('https://raw.githubusercontent.com/cahyo-refactory/RSP-DataSet-SkilTest-FE/main/partner.json')
    .then(res => {
      console.log(res.data);
      setPartner(res.data.data)
    })
  },[])

  console.log(TopHeroComp);

  return (
    <>
      <HeroContainer style={{height: bottomHeroComp || heroHeight? heroHeight : 500}}>
        {
          TopHeroComp && <TopHeroComp/>
        }
        <HeroBg>
          <ImageBg src={heroBg} style={{opacity: heroGradientOpacity}}/>
        </HeroBg>
        <HeroContentWrapper display={heroDisplay}>
          <HeroContentColumn1 style={{width: width}} >
            <HeroContentBody display={heroDisplay}>
              <HeroH1 dangerouslySetInnerHTML={{__html:heroTitle}} />
              <HeroP style={{fontSize: heroFontSizeDesc}} dangerouslySetInnerHTML={{__html:heroDesc}} />
            </HeroContentBody>
            <HeroBtnWrapper display={heroDisplay}>
              <Button style={{fontSize: buttonText2? "" : 16, padding: buttonText2? "" : "15px 50px"}}>
                {buttonText1}
              </Button>
              {
                buttonText2 && <div style={{margin: "20px 20px"}}/>
              }
              {buttonText2 && <Button transparent={true}>
                {buttonText2}
              </Button>}
            </HeroBtnWrapper>
          </HeroContentColumn1>
          <HeroContentColumn2/>
        </HeroContentWrapper>
        {/* new components added */}
        <HeroBottomComponents>
          {
            bottomHeroComp?
            <>
              <BottomContentTitle>
                Partner Eksklusif Kami
              </BottomContentTitle>
              <BottomContentWrapper>
                <BottomContentBg/>
                <BottomContent>
                  <Flicking
                    className="flicking flicking0"
                    gap={10}
                    circular={true}
                    moveType="freeScroll"
                  >
                    {
                      partner.map((datum) => (
                        <Img key={datum.id} src={datum.photo_url} />
                      ))
                    }
                    <div/>
                  </Flicking>
                </BottomContent>
              </BottomContentWrapper>
            </>
            :null
          }
        </HeroBottomComponents>
      </HeroContainer>
    </>
  )
}
