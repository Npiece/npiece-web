import {useState, ReactNode, ChangeEvent, FormEvent} from "react";

interface NftMintProps {
  className?: string;
  profile?: ReactNode;
}

function NftMint(props: NftMintProps) {
  // Initialize the state variables for name and bio
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Here you would call the function that mints the NFT with the name and bio
    // mintNFT(name, bio);
    console.log(name, bio); // for now, just log the name and bio
    // reset the form
    setName("");
    setBio("");
  };

  return (
    <form className={props.className} onSubmit={handleSubmit}>
      <div className={`${props.className}-profile`}>{props.profile}</div>
      <div
        className={`${props.className}-container`}
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <div className={`${props.className}-input-container`}>
          <label className={`${props.className}-name-label`}>
            <p>Your Nickname</p>
            <input
              type="text"
              className={`${props.className}-input`}
              placeholder={"Enter your preferred nickname"}
              value={name}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setName(e.target.value)
              }
              required
            />
          </label>
          <label className={`${props.className}-bio-label`}>
            <p>Brief Introduction</p>
            <textarea
              maxLength={80}
              className={`${props.className}-textarea`}
              placeholder={"Describe yourself in 80 characters"}
              value={bio}
              onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                setBio(e.target.value)
              }
            />
          </label>
          <button className={`${props.className}-mint`} type="submit">
            <p>Mint your Npunks</p>
            <p>(0/1)</p>
          </button>
        </div>
      </div>
    </form>
  );
}

export default NftMint;
