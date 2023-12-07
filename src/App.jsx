import "./App.css";
import { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { init, getInstance } from "./utils/fhevm";
import { toHexString } from "./utils/utils";
import { Connect } from "./Connect";
import { EncryptedSwap } from "./assets/EncryptedSwap";
import web3 from "web3";

const ENCRYPTED_SWAP_CONTRACT_ADDRESS = 0x4fd8d1e4938897a8738106af2c39c407c8d76208;

function App() {
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    init()
      .then(() => {
        setIsInitialized(true);
      })
      .catch(() => setIsInitialized(false));
  }, []);

  if (!isInitialized) return null;

  return (
    <div className="App">
      <div className="menu">
        <Connect>{(account, provider) => <Example />}</Connect>
      </div>
    </div>
  );
}

function Example() {
  const [amountUint32, setAmountUint32] = useState(0);
  const [eamountUint32, setEamountUint32] = useState(0);
  const [tokenAddress, setTokenAddress] = useState(0);
  const [encryptedParts, setEncryptedParts] = useState([""]);
  const [isDisabled, setIsDisabled] = useState(true);

  const handleTokenAddressChanged = (event) => {
    let _instance = getInstance();

    setTokenAddress(event.target.value);
    _instance.then((instance) => {
      console.log(event.target.value);
      const tokenAddress = event.target.value;
      const address = tokenAddress.slice(2);
      const parts = [];
      for (let i = 0; i < 5; i++) {
        parts.push("0x" + address.slice(i * 8, i * 8 + 8));
      }
      const encryptedParts = [];
      parts.forEach((value) => {
        encryptedParts.push(toHexString(instance.encrypt32(+value)));
      });
      setEncryptedParts(encryptedParts);
    });
  };

  const handleAmountChangeUint32 = (event) => {
    let _instance = getInstance();
    _instance.then((instance) => {
      setEamountUint32(toHexString(instance.encrypt32(+event.target.value)));
    });
    setAmountUint32(event.target.value);
  };

  const handleCopyClickUint32 = () => {
    if (eamountUint32) {
      navigator.clipboard.writeText("0x" + eamountUint32);
    }
  };

  const handleSwapToken = async () => {
    console.log("Calling Swap Token");

    contract.console.log(encryptedParts.forEach((value) => toHexString(value)));
    setIsDisabled(false);
    if (error) {
      console.log("Error while swapping tokens");
    } else {
      try {
        const hash = await writeAsync?.();
        console.log(hash);
        setIsDisabled(true);
      } catch (err) {
        setIsDisabled(true);
      }
    }
  };

  return (
    <div>
      <h1>
        Welcome to <span>Inco Network</span>
      </h1>
      <span className="footer">
        Switch to Inco Network on Metamask:{" "}
        <a
          href="https://docs.inco.network/getting-started/connect-metamask"
          target="_blank"
        >
          Guide
        </a>
      </span>
      <Form>
        <Form.Group className="form-group">
          <Form.Label className="label"> TokenAddress</Form.Label>
          <Form.Control
            style={{ color: "black" }}
            type="text"
            value={"0x"}
            placeholder="10"
            onChange={handleTokenAddressChanged}
            className="Input"
          />
        </Form.Group>
        <Form.Group className="form-group">
          <Form.Label className="label">ciphertext </Form.Label>
          <Form.Control
            style={{ color: "#72FF80" }}
            type="text"
            value={"0x" + eamountUint32}
            disabled
            onChange={handleAmountChangeUint32}
            className="Input"
          />
        </Form.Group>
      </Form>
      <Button onClick={handleSwapToken} type="Button">
        {" "}
        Swap Tokens{" "}
      </Button>
      <br></br>
      <span className="footer">
        Documentation:{" "}
        <a
          href="https://docs.inco.network/introduction/inco-network-introduction"
          target="_blank"
        >
          docs.inco.network
        </a>
      </span>
    </div>
  );
}

export default App;
