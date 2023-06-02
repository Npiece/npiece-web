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
    <div className={`${props.className}-box`}>
      <div className={`${props.className}-typed`}>
        <p className="sequence1">
          NpiecePunks is a soul-bound non-fungible tokens (NFTs)
        </p>
        <p className="sequence2">
          representing your identity in decentral worlds.
        </p>
      </div>

      <form className={props.className} onSubmit={handleSubmit}>
        <div className={`${props.className}-profile`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            shape-rendering="crispEdges"
            viewBox="0 -0.5 100 100"
            width="100%"
            height="100%"
            style={{
              objectFit: "cover",
              borderRadius: "5%",
            }}
          >
            <path
              stroke="#2b2b2b"
              d="M0,0h100M0,1h100M0,2h100M0,3h100M0,4h70M85,4h15M0,5h70M85,5h15M0,6h70M85,6h15M0,7h64M88,7h12M0,8h64M88,8h12M0,9h64M88,9h12M0,10h61M91,10h9M0,11h61M91,11h9M0,12h61M91,12h9M0,13h43M55,13h3M73,13h3M94,13h6M0,14h43M55,14h3M73,14h3M94,14h6M0,15h43M55,15h3M73,15h3M94,15h6M0,16h37M67,16h15M94,16h6M0,17h37M67,17h15M94,17h6M0,18h37M67,18h15M94,18h6M0,19h37M64,19h21M97,19h3M0,20h37M64,20h21M97,20h3M0,21h37M64,21h21M97,21h3M0,22h34M46,22h3M52,22h3M64,22h24M97,22h3M0,23h34M46,23h3M52,23h3M64,23h24M97,23h3M0,24h34M46,24h3M52,24h3M64,24h24M97,24h3M0,25h34M70,25h15M97,25h3M0,26h34M70,26h15M97,26h3M0,27h34M70,27h15M97,27h3M0,28h34M49,28h3M67,28h15M97,28h3M0,29h34M49,29h3M67,29h15M97,29h3M0,30h34M49,30h3M67,30h15M97,30h3M0,31h37M58,31h18M94,31h6M0,32h37M58,32h18M94,32h6M0,33h37M58,33h18M94,33h6M0,34h19M34,34h6M55,34h18M91,34h9M0,35h19M34,35h6M55,35h18M91,35h9M0,36h19M34,36h6M55,36h18M91,36h9M0,37h13M37,37h6M46,37h3M52,37h18M85,37h15M0,38h13M37,38h6M46,38h3M52,38h18M85,38h15M0,39h13M37,39h6M46,39h3M52,39h18M85,39h15M0,40h10M61,40h9M82,40h18M0,41h10M61,41h9M82,41h18M0,42h10M61,42h9M82,42h18M0,43h7M22,43h3M64,43h6M82,43h18M0,44h7M22,44h3M64,44h6M82,44h18M0,45h7M22,45h3M64,45h6M82,45h18M0,46h4M16,46h15M64,46h6M82,46h18M0,47h4M16,47h15M64,47h6M82,47h18M0,48h4M16,48h15M64,48h6M82,48h18M0,49h4M13,49h18M64,49h36M0,50h4M13,50h18M64,50h36M0,51h4M13,51h18M64,51h36M0,52h4M13,52h18M64,52h9M79,52h21M0,53h4M13,53h18M64,53h9M79,53h21M0,54h4M13,54h18M64,54h9M79,54h21M0,55h7M19,55h12M64,55h6M82,55h18M0,56h7M19,56h12M64,56h6M82,56h18M0,57h7M19,57h12M64,57h6M82,57h18M0,58h7M16,58h15M64,58h3M85,58h15M0,59h10M16,59h15M64,59h3M85,59h15M0,60h10M16,60h15M64,60h3M85,60h15M0,61h25M46,61h3M55,61h3M64,61h6M82,61h18M0,62h25M46,62h3M55,62h3M64,62h6M82,62h18M0,63h25M46,63h3M55,63h3M64,63h6M82,63h18M0,64h22M64,64h9M79,64h21M0,65h22M64,65h9M79,65h21M0,66h22M64,66h9M79,66h21M0,67h19M64,67h36M0,68h19M64,68h36M0,69h19M64,69h36M0,70h19M64,70h36M0,71h19M64,71h36M0,72h19M64,72h36M0,73h19M64,73h36M0,74h19M64,74h36M0,75h19M64,75h36M0,76h19M31,76h3M49,76h6M64,76h36M0,77h19M31,77h3M49,77h6M64,77h36M0,78h19M31,78h3M49,78h6M64,78h36M0,79h34M61,79h39M0,80h34M61,80h39M0,81h34M61,81h39M0,82h22M28,82h6M61,82h39M0,83h22M28,83h6M61,83h39M0,84h22M28,84h6M61,84h39M0,85h19M31,85h3M46,85h54M0,86h19M31,86h3M46,86h54M0,87h19M31,87h3M46,87h54M0,88h16M52,88h48M0,89h16M52,89h48M0,90h16M52,90h48M0,91h19M52,91h48M0,92h19M52,92h48M0,93h19M52,93h48M0,94h22M55,94h45M0,95h22M55,95h45M0,96h22M55,96h45M0,97h22M55,97h45M0,98h22M55,98h45M0,99h22M55,99h45"
            />
            <path
              stroke="#ffffff"
              d="M70,4h15M70,5h15M70,6h15M64,7h24M64,8h24M64,9h24M61,10h30M61,11h30M61,12h30M58,13h15M76,13h18M58,14h15M76,14h18M58,15h15M76,15h18M55,16h12M82,16h12M55,17h12M82,17h12M55,18h12M82,18h12M55,19h9M85,19h12M55,20h9M85,20h12M55,21h9M85,21h12M55,22h9M88,22h9M55,23h9M88,23h9M55,24h9M88,24h9M58,25h12M85,25h12M58,26h12M85,26h12M58,27h12M85,27h12M58,28h9M82,28h15M61,29h6M82,29h15M61,30h6M82,30h15M76,31h18M76,32h18M76,33h18M19,34h15M73,34h18M19,35h15M73,35h18M19,36h15M73,36h18M13,37h24M70,37h15M13,38h24M70,38h15M13,39h24M70,39h15M10,40h30M70,40h12M10,41h30M70,41h12M10,42h30M70,42h12M7,43h15M25,43h18M70,43h12M7,44h15M25,44h18M70,44h12M7,45h15M25,45h18M70,45h12M4,46h12M31,46h12M70,46h12M4,47h12M31,47h12M70,47h12M4,48h12M31,48h12M70,48h12M4,49h9M34,49h12M4,50h9M34,50h12M4,51h9M34,51h12M4,52h9M37,52h9M73,52h6M4,53h9M37,53h9M73,53h6M4,54h9M37,54h9M73,54h6M7,55h12M34,55h12M70,55h12M7,56h12M34,56h12M70,56h12M7,57h12M34,57h12M70,57h12M7,58h9M31,58h15M67,58h18M10,59h6M31,59h15M67,59h18M10,60h6M31,60h15M67,60h18M25,61h18M70,61h12M25,62h18M70,62h12M25,63h18M70,63h12M22,64h18M73,64h6M22,65h18M73,65h6M22,66h18M73,66h6M19,67h15M19,68h15M19,69h15M19,70h12M19,71h12M19,72h12M19,73h12M19,74h12M19,75h12M19,76h12M19,77h12M19,78h12M22,82h6M22,83h6M22,84h6M19,85h12M19,86h12M19,87h12M16,88h18M16,89h18M16,90h18M19,91h12M19,92h12M19,93h12M22,94h6M22,95h6M22,96h6"
            />
            <path
              stroke="#787878"
              d="M43,13h12M43,14h12M43,15h12M37,16h18M37,17h18M37,18h18M37,19h18M37,20h18M37,21h18M34,22h12M49,22h3M34,23h12M49,23h3M34,24h12M49,24h3M34,25h24M34,26h24M34,27h24M34,28h15M52,28h6M34,29h15M52,29h9M34,30h15M52,30h9M37,31h21M37,32h21M37,33h21M40,34h15M40,35h15M40,36h15M43,37h3M49,37h3M43,38h3M49,38h3M43,39h3M49,39h3M40,40h21M40,41h21M40,42h21M43,43h21M43,44h21M43,45h21M43,46h21M43,47h21M43,48h21M31,49h3M46,49h18M31,50h3M46,50h18M31,51h3M46,51h18M31,52h6M46,52h18M31,53h6M46,53h18M31,54h6M46,54h18M31,55h3M46,55h18M31,56h3M46,56h18M31,57h3M46,57h18M46,58h18M46,59h18M46,60h18M43,61h3M49,61h6M58,61h6M43,62h3M49,62h6M58,62h6M43,63h3M49,63h6M58,63h6M40,64h24M40,65h24M40,66h24M34,67h30M34,68h30M34,69h30M31,70h33M31,71h33M31,72h33M31,73h33M31,74h33M31,75h33M34,76h15M55,76h9M34,77h15M55,77h9M34,78h15M55,78h9M34,79h27M34,80h27M34,81h27M34,82h27M34,83h27M34,84h27M34,85h12M34,86h12M34,87h12M34,88h18M34,89h18M34,90h18M31,91h21M31,92h21M31,93h21M28,94h27M28,95h27M28,96h27M22,97h33M22,98h33M22,99h33"
            />
          </svg>
        </div>
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
    </div>
  );
}

export default NftMint;
