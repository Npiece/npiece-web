import "./Intro.css";
import {NpiecePunks} from "../assets/NpiecePunks";
import {Replay} from "../assets/Replay";
import {Space} from "../assets/Space";

export const IntroPage = () => {
  return (
    <div className="page">
      <div className="container">
        <section className="intro">
          <p>Once upon a time, in a faraway galaxy...</p>
          <p>DeFi and non-fungible tokens ruled the world.</p>
        </section>

        <Space className="space-background" />
        <NpiecePunks color="#fff" className="logo" width="10em" />
        <div className="content">
          <p className="title">Episode 0</p>
          <p className="subtitle">Finding Hope - The Birth of NpiecePunks</p>
          <p>
            The cryptocurrency market was suffering from a prolonged bear
            market. Numerous cryptocurrency communities were sinking into
            despair, and ecosystems were starting to fade, losing their vibrancy
            as they lost energy. In this dire situation, the authorities of the
            DeFi planet ruthlessly exploited civilians to safeguard their own
            interests, leaving their planet and its people neglected. But not
            all was lost.
          </p>
          <p>
            In the midst of this chaos, a warrior in his forties, named 'Uncle
            Barc', rose against the tide. Barc was not just any warrior. He was
            a man gifted with an extraordinary ability known as the 'Force'.
            This 'Force' gave him an unparalleled understanding of the DeFi and
            NFT markets, allowing him to predict and influence market
            fluctuations as if he was bending reality itself. In search of those
            struggling in this ruthless market, Barc decided to form a group
            known as 'Npiece'.
          </p>
          <p>
            This group wasn't just a community for solace, but a place to
            nurture and awaken this 'Force' within its members. The purpose
            wasn't just survival but to master control over the volatile
            currents of the crypto market. From various backgrounds and with
            different tales of struggle, they formed a new alliance,
            'NpiecePunks'. These individuals were akin to apprentices, learning
            to tap into their potential, promising themselves to seek a new hope
            amidst the dystopian world. These 'NpiecePunks' were confident that,
            together, their united 'Force' could bring forth a new Bull market.
          </p>
          <p>
            Their actions would soon ripple through the crypto world, their
            bravery and resolve eagerly anticipated. Thus, begins the tale of
            their heroic journey to change the world, an unwavering beacon of
            hope in this DeFi wilderness. Their saga becomes a testament to the
            enduring spirit of unity and the power of the 'Force'.
          </p>
        </div>
        <section className="ending">
          <NpiecePunks color="#fff" className="ending-image" />
          <Replay className="replay-button" iconWidth="1em">
            Replay
          </Replay>
        </section>
      </div>
    </div>
  );
};
