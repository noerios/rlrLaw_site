import React from 'react';
import { ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP } from './ServicesElements';
import VotingIcon from '../../images/votingicon.png';
import FederalIcon from '../../images/federalicon.png';
import InjuryIcon from '../../images/injuryicon.png';
import RedistrictingIcon from '../../images/redistrictingicon.png';
import ImmigrationIcon from '../../images/immigrationicon.png';
import PhoneIcon from '../../images/phoneicon.png';


const Services = () => {
    return (
        <>
        <ServicesContainer id="services">
            <ServicesH1>Areas of Practice</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={VotingIcon} />
                    <ServicesH2>Voting Rights & Civil Rights</ServicesH2>
                    <ServicesP>Mr. Rios has a deep history in representing clients who have had thier voting rights violated. If you want an analysis of your right to vote, contact us. </ServicesP>
                </ServicesCard>

                <ServicesCard>
                    <ServicesIcon src={FederalIcon} />
                    <ServicesH2>Civil Seizure & Interpleaders Procedings</ServicesH2>
                    <ServicesP>Our firm has experience in representing persons who have had their assets seized by the government.  </ServicesP>
                </ServicesCard>

                <ServicesCard>
                    <ServicesIcon src={InjuryIcon} />
                    <ServicesH2>Personal Injury</ServicesH2>
                    <ServicesP>Our firm has experience with cases in which clients suffered personal injuries due to car accidents and has obtained cash settlements in the millions.  </ServicesP>
                </ServicesCard>

                <ServicesCard>
                    <ServicesIcon src={RedistrictingIcon} />
                    <ServicesH2>Redistricting Law</ServicesH2>
                    <ServicesP>The 2000 United States Census triggered an enormous set of legal and legislative procedures designed at shifting democratic political power, which is known as "Redistricting." </ServicesP>
                </ServicesCard>

                <ServicesCard>
                    <ServicesIcon src={ImmigrationIcon} />
                    <ServicesH2>Immigration</ServicesH2>
                    <ServicesP>If you or someone you love has been affected by an immigration issue, our firm can help. Schedule a consultation to evaluate your options. </ServicesP>
                </ServicesCard>

                <ServicesCard>
                    <ServicesIcon src={PhoneIcon} />
                    <ServicesH2>Free Consultation</ServicesH2>
                    <ServicesP>Contact us by phone or email for a free consultation. </ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
            
        </>
    )
}

export default Services
