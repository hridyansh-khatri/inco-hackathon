// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

import "@openzeppelin/contracts/interfaces/IERC20.sol";

interface IMockUniswap {
    function swapTokens(
        address,
        address,
        uint256
    ) external;
}

interface MockERC20 {
    function mint(address target, uint256 amount) external;
}

contract MockUniswap {
    address public tokenIn;
    address public tokenOut;

    constructor(address token1, address token2) {
        tokenIn = token1;
        tokenOut = token2;
        MockERC20(tokenOut).mint(address(this), 100 ether);
    }

    function swapTokens(
        address receiver,
        address token,
        uint256 amount
    ) public {

        IERC20(token).transferFrom(receiver, address(this), amount);

        MockERC20(tokenOut).mint(receiver, amount);
    }
}
