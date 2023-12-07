# IDEA 

Use FHE to obscure MEV for applications that depend on public visibility of operations that are going to happen. 

For e.g. larger trades are sandwiched when seen in the mempool 

### NOTE Encryption may not be necessary for such application beyond transaction execution 

For e.g. it may be viable to show / display the token swapped once the swap has happened. 
This remains true for use-cases where run time obfuscation is more important than complete privacy 

## Contracts 

Encrypted Swap Contracts Contain the contracts with a rough POC of the idea. 

Although the contracts are very simple and do not contain any compile time error. I have stripped most of the validation logic because of continous failures to process transactions. Although all major internal transactions are being executed correctly. Including the transfer and mint of the underlying tokens the transactions are still reverting. This might be an error on the execution client or a Bug that I have missed for refernce kindly notice the following transactions where all of the internal transactions can be seen yet the execution reverts. This might require more debugging from my side 

https://explorer.inco.network/tx/0xa082b0e6c50f152be0c41470a4be69beacb7911f23930449493a55a10b556dbd

https://explorer.inco.network/tx/0xabf3f87c1688c815714229ede78720837e01a15cb96d213f696a270095851a24/token-transfers

### EncryptedIntentTransaction.sol 

The contract working around the limitation of the smaller datatypes tries to take multiple 
uint32 to create an address that needs to be swapped into from a given token. As seen from the code 
runtime encryption may hinder execution unless the code being interacted with is also using a similar format and hence the token address is decrypted to be used. 

### MockUniswap.sol 

After Running into problems trying to deploy Uniswap V3 and V2 on Inco network this is a very basic contract that mint some token trying to replicate a Barter type contract. Most of the variables are fixed in this example but in a real world example this would be dynamic in nature 

## Frontend 

To keep in line with the necessity of using smaller data types. Any token address is split into 5 differnet equi-sized substrings which are then encrypted and pushed forward. 

The frontend is still a WIP and needs more work before it is usable. The only thing showcased is the method to split strings and encrypt them with the limitations of the current system.


### Further Thoughts 

Using FHE we can elevate the current DeFi landscape without the need for widespread adoption and lots of changes as it offers a lot of utility that can be extracted with minimal code changes. 

The biggest barrier I saw was the prohibitive gas cost in this approach which lead to out of gas erros when trying to convert multiple uint32 to address. Lower gas costs or higher data-limits could help in easier and more readable code.


# Deployed Contract Address: 

Mock Uniswap: 0xa52c10c951EF33f797BdE36c616bA8E7AaFfF1b0
ENCRYPTED SWAP: 0x0DDC3dB703DBaC3FAD841504f209ec4C09AA5885
MOCK WETH: 0xe684667eFC3b19a3d44b22630BDECb4Fd8782BD2
Mock USDT: 0xF0c89c7b0E7835657B9066F404D1a1655b725e1e

