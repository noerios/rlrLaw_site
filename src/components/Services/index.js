import React from 'react';
import { ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP } from './ServicesElements';
import VotingIcon from '../../images/votingicon.png';
import FederalIcon from '../../images/federalicon.png';
import InjuryIcon from '../../images/injuryicon.png';
import RedistrictingIcon from '../../images/redistrictingicon.png';
import ImmigrationIcon from '../../images/immigrationicon.png';


const Services = () => {
    return (
        <>
        <ServicesContainer id="services">
            <ServicesH1>Areas of Practice</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={VotingIcon} />
                    <ServicesH2>Voting Rights & Civil Rights</ServicesH2>
                    <ServicesP>Mr. Rios has a deep history in representing clients who have had thier voting rights violated. If you want an analysis of your right to vote, contact us and provide us with the requested information; we will then provide you with a 2 page brief analysis of your local election systems and wether or not they could be violating federal law. </ServicesP>
                </ServicesCard>

                <ServicesCard>
                    <ServicesIcon src={FederalIcon} />
                    <ServicesH2>Civil Seizure & Interpleaders Procedings</ServicesH2>
                    <ServicesP>If the government has seized any of your assets in a civil proceeding, you do have the right to protect yourself and your property. Our firm has experience in representing persons who have had their assets seized by the government.  </ServicesP>
                </ServicesCard>

                <ServicesCard>
                    <ServicesIcon src={InjuryIcon} />
                    <ServicesH2>Personal Injury</ServicesH2>
                    <ServicesP>Our firm has been involved in many cases in which clients suffered serious personal injuries due to car accidents. The firm has successfully obtained injury settlements involving millions of dollars. Contact our office for a free consultation.  </ServicesP>
                </ServicesCard>

                <ServicesCard>
                    <ServicesIcon src={RedistrictingIcon} />
                    <ServicesH2>Redistricting Law</ServicesH2>
                    <ServicesP>The 2000 United States Census triggered an enormous, once in a decade, set of legal and legislative procedures designed at shifting democratic political power, which is known as "Redistricting." Redistricting will have an impact on all levels of jurisdictions. Every Legislature in the United States will redraw their respective legislative districts; all 254 Texas counties will review their commissioner, justice of the peace and constable precincts for possible redistricting and thousands of cities, school districts, water, hospital and utility districts will also review their election districts.</ServicesP>
                </ServicesCard>

                <ServicesCard>
                    <ServicesIcon src={ImmigrationIcon} />
                    <ServicesH2>Immigration</ServicesH2>
                    <ServicesP>If you or someone you love has been affected by an immigration issue, the Law Office of Rolando L. Rios can help. Schedule a consultation to evaluate your options. </ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
            
        </>
    )
}

export default Services
