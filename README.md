# B@B Project Boilerplate

## Introduction

This is a boilerplate that can be used to start a new Solidity project.

## Getting Started

### Install npm dependencies 

```
npm install
npm install -g @digix/sigmate
```

### Create testing keystore 

```
sigmate keystore --label boilerplate-tester --password mypassword
export PASSWORD=mypassword
export KEYSTORE=~/.sigmate/sigmate-v3-boilerplate-tester.json
```

## Folder Structure

```
├── README.md
├── build (post deployment artifacts use 'npm run truffle -- networks --clean' before committing to repository')
│   └── contracts
│       ├── ACGroups.json
│       ├── ACOwned.json
│       ├── Boilerplate.json
│       ├── Common.json
│       ├── ContractResolver.json
│       ├── MathUtils.json
│       ├── Migrations.json
│       └── ResolverClient.json
├── contracts (Location of contracts and test contracts)
│   ├── Boilerplate.sol
│   ├── Common.sol
│   └── Migrations.sol
├── migrations (Location of truffle migration scripts)
│   ├── 1_initial_migration.js
│   └── 2_deploy_contracts.js
├── package.json
├── test (Test scripts)
│   └── BoilerplateTest.js
└── truffle.js (Truffle configuration)
```


