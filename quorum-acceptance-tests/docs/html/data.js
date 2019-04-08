var tags = ["raw", "raft", "estimategas", "log", "storage", "dual-state", "public-to-private", "network-cleanup-required", "stop", "pr570", "add", "externally-signed", "event", "gas", "contract-interaction", "all-public", "nosupport", "sign", "network-setup", "smart-contract", "basic", "load", "state", "advanced-1.8.12", "private", "mining", "log-events", "all-private", "sync", "start", "advanced", "basic-raft", "public", "basic-istanbul", "transaction", "isolate", "private-to-public", "istanbul"]
var specs = [{"path":"src/specs/01_basic/estimate_gas.html","name":"Estimate gas required for transactions and contracts","scenarios":[{"name":"Estimate gas required for public transaction","tags":["public","basic","estimategas"]},{"name":"Deploy public smart contract, this is used for estimating the calls (we also need it so we can use the binary data in the estimateGas() acceptance tests below)","tags":["public","basic","estimategas"]},{"name":"Estimate gas required to create public smart contract","tags":["public","basic","estimategas"]},{"name":"Estimate gas required to call a public smart contract","tags":["public","basic","estimategas"]},{"name":"Deploy private smart contract, this is used for estimating the calls (we also need it so we can use the binary data in the estimateGas() acceptance tests below)","tags":["private","basic","estimategas"]},{"name":"Estimate gas required to create private smart contract","tags":["private","basic","estimategas"]},{"name":"Estimate gas required to call a private smart contract","tags":["private","basic","estimategas"]}]},{"path":"src/specs/01_basic/externally_signed_private_raw_smart_contract_single.html","name":"Private raw smart contract when signed externally","scenarios":[{"name":"Contract is mined","tags":["raw","basic","raw","externally-signed","private"]},{"name":"Storage Root storing private smart contracts must be the same","tags":["raw","basic","raw","externally-signed","private"]},{"name":"Transaction payload is secured","tags":["raw","basic","raw","externally-signed","private"]},{"name":"Privacy is enforced between parties","tags":["raw","basic","raw","externally-signed","private"]},{"name":"When there's an update, privacy is still enforced","tags":["raw","basic","raw","externally-signed","private"]}]},{"path":"src/specs/01_basic/externally_signed_public_raw_smart_contract_single.html","name":"Public raw smart contract when signed externally","scenarios":[{"name":"Contract is deployed and mined","tags":["basic","raw","externally-signed","public"]},{"name":"Everyone in the network has the same state for the contract","tags":["raw","basic","raw","externally-signed","public"]},{"name":"When there's an update, every node is updated","tags":["raw","basic","raw","externally-signed","public"]}]},{"path":"src/specs/01_basic/istanbul_fault_tolerance.html","name":"Istanbul fault tolerance and recoverability","scenarios":[{"name":"Modify number of validators from less than 2F + 1 to more than 2F + 1","tags":["basic-istanbul"]}]},{"path":"src/specs/01_basic/private_smart_contract_async.html","name":"Sending private smart contract asynchronously","scenarios":[{"name":"Contract is successfully mined with valid account","tags":["basic"]},{"name":"Contract is not mined with non-existed account","tags":["basic"]}]},{"path":"src/specs/01_basic/private_smart_contract_event.html","name":"Private smart contract with event","scenarios":[{"name":"Log events in total are **only** captured in participated parties when executing the contract","tags":["event","log","basic"]},{"name":"Log events in the state are **only** captured in participated parties when executing the contract","tags":["event","log","basic"]}]},{"path":"src/specs/01_basic/private_smart_contract_multiple.html","name":"Multiple private smart contracts","scenarios":[{"name":"Contracts are mined","tags":["private","load","basic"]}]},{"path":"src/specs/01_basic/private_smart_contract_single.html","name":"Single private smart contract","scenarios":[{"name":"Contract is mined","tags":["private","mining","basic"]},{"name":"Storage Root storing private smart contracts must be the same","tags":["private","storage","basic"]},{"name":"Transaction payload is secured","tags":["private","transaction","basic"]},{"name":"Privacy is enforced between parties","tags":["private","basic"]},{"name":"When there's an update, privacy is still enforced","tags":["private","basic"]}]},{"path":"src/specs/01_basic/private_smart_contract_spam.html","name":"Multiple private smart contracts between nodes","scenarios":[{"name":"Send transactions from one node to others","tags":["basic"]}]},{"path":"src/specs/01_basic/private_smart_contract_state_manipulation.html","name":"State manipulation in private smart contract","scenarios":[{"name":"Private state is maintained","tags":["private","state","basic"]}]},{"path":"src/specs/01_basic/public_smart_contract_event.html","name":"Public smart contract with event","scenarios":[{"name":"Log events in total are captured when executing the contract","tags":["log-events","basic","public"]}]},{"path":"src/specs/01_basic/raft_gas_usage.html","name":"Gas usage for private contracts on participant and non-participant nodes","scenarios":[{"name":"Private contract with gas below intrinsic gas should be rejected (and not remain pending).","tags":["basic-raft","gas","private"]},{"name":"Private contract with gas between intrinsic gas and required gas should be rejected (and not remain pending).","tags":["basic-raft","gas","private"]},{"name":"Private contract with sufficient gas should be accepted.","tags":["basic-raft","gas","private"]}]},{"path":"src/specs/01_basic/smart_contract_dual_state.html","name":"Dual state implementation when peforming function calls from one smart contract to another","scenarios":[{"name":"Function calls between all public smart contracts: public -\u003e public -\u003e public","tags":["all-public","basic","dual-state","contract-interaction"]},{"name":"Function calls between all private smart contracts: private -\u003e private -\u003e private","tags":["all-private","basic","dual-state","contract-interaction"]},{"name":"Function calls from a private smart contract to public smart contracts: private -\u003e public -\u003e public","tags":["private-to-public","basic","dual-state","contract-interaction"]},{"name":"Function calls from a public smart contract to private smart contracts: public -\u003e private -\u003e private","tags":["public-to-private","basic","dual-state","contract-interaction"]}]},{"path":"src/specs/01_basic/value_transfer_private_transactions.html","name":"Value transfer in private transactions","scenarios":[{"name":"Unsuccessful private transaction submission","tags":["private","nosupport","basic"]},{"name":"Unsuccessful signed private transaction submission","tags":["private","nosupport","sign","basic"]}]},{"path":"src/specs/01_basic/value_transfer_public_transactions.html","name":"Value transfer in public transactions","scenarios":[{"name":"Successful public transaction submission","tags":["public","basic"]},{"name":"Successful signed public transaction submission","tags":["public","sign","basic"]}]},{"path":"src/specs/02_advanced/istanbul_block_synchronization.html","name":"Block synchronization when using Istanbul BFT consensus","scenarios":[{"name":"Verify block synchronization","tags":["add","start","stop","network-setup","advanced-1.8.12","sync","isolate","network-cleanup-required","istanbul"]}]},{"path":"src/specs/02_advanced/private_transaction_bloom_section.html","name":"Private smart contract with event in the next bloom bit section","scenarios":[{"name":"Log events are **only** captured in participated parties when executing the contract","tags":["raft","pr570","advanced"]}]},{"path":"src/specs/02_advanced/raft_block_synchronization.html","name":"Block synchronization when using Raft consensus","scenarios":[{"name":"Verify block synchronization","tags":["add","start","stop","network-setup","advanced-1.8.12","sync","isolate","network-cleanup-required","raft"]}]},{"path":"src/specs/02_advanced/transactions_for_block_height.html","name":"Transactions for different block heights","scenarios":[{"name":"Private smart contracts for Istanbul consensus","tags":["istanbul","private","smart-contract","advanced"]},{"name":"Public smart contracts for Istanbul consensus","tags":["istanbul","public","smart-contract","advanced"]},{"name":"Private smart contracts for Raft consensus","tags":["raft","advanced"]}]}]