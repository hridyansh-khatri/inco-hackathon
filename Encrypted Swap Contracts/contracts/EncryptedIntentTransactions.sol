// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

import "fhevm/lib/TFHE.sol";
import "@openzeppelin/contracts/interfaces/IERC20.sol";

interface IMockUniswap {
    function swapTokens(
        address,
        address,
        uint256
    ) external;
}

contract EncryptedSwap {
    address public mockUniswap;
        address public constant MOCK_WETH =
            0xe684667eFC3b19a3d44b22630BDECb4Fd8782BD2;
    uint256 public constant amount = 0.1 ether;


    constructor(address mockSwapAddress) {
        mockUniswap = mockSwapAddress;
    }

    function executeTransaction(
        bytes calldata token1Part1,
        bytes calldata token1Part2,
        bytes calldata token1Part3,
        bytes calldata token1Part4,
        bytes calldata token1Part5
    ) public  {
        euint32 tokenPart1 = TFHE.asEuint32(token1Part1);
        euint32 tokenPart2 = TFHE.asEuint32(token1Part2);
        euint32 tokenPart3 = TFHE.asEuint32(token1Part3);
        euint32 tokenPart4 = TFHE.asEuint32(token1Part4);
        euint32 tokenPart5 = TFHE.asEuint32(token1Part5);
        IMockUniswap(mockUniswap).swapTokens(
            mockWETH,
            address(
                uint160(
                    bytes20(
                        abi.encodePacked(
                            TFHE.decrypt(tokenPart1),
                            TFHE.decrypt(tokenPart2),
                            TFHE.decrypt(tokenPart3),
                            TFHE.decrypt(tokenPart4),
                            TFHE.decrypt(tokenPart5)
                        )
                    )
                )
            ),
            amount
        );
    }
}
