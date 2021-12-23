import { ethers } from 'ethers';
import * as shared_backend from './shared_backend';
import type { // =>
CBR_Address } from './CBR';
import type { // =>
ETH_Ty, AnyETH_Ty, EthLikeCompiledArgs } from './ETH_like_interfaces';
import { TypeDefs, Stdlib_Backend_Base } from './interfaces';
import { MkPayAmt } from './shared_impl';
export type { // =>
ETH_Ty, AnyETH_Ty, };
export declare type Token = CBR_Address;
export declare type PayAmt = MkPayAmt<Token>;
export declare function makeEthLikeCompiled(ethLikeCompiledArgs: EthLikeCompiledArgs): {
    typeDefs: TypeDefs;
    stdlib: Stdlib_Backend_Base<AnyETH_Ty>;
    UInt_max: ethers.BigNumber;
    addressEq: (addr1: unknown, addr2: unknown) => boolean;
    digestEq: (x: unknown, y: unknown) => boolean;
    tokenEq: (x: unknown, y: unknown) => boolean;
    digest: (t: AnyETH_Ty, a: unknown) => string;
    emptyContractInfo: string | number;
    checkedBigNumberify: (at: string, max: ethers.BigNumber, n: any) => ethers.BigNumber;
    protect: (t: any, v: unknown, ai?: string | undefined) => unknown;
    Array_zip: <A, B>(a1: A[], a2: B[]) => [A, B][];
    newMap: <A_1>(opts: shared_backend.MapOpts<A_1>) => shared_backend.LinearMap<A_1>;
    mapRef: <A_2>(m: shared_backend.LinearMap<A_2>, f: string) => Promise<shared_backend.MaybeRep<A_2>>;
    mapSet: <A_3>(m: shared_backend.LinearMap<A_3>, f: string, v: A_3) => Promise<void>;
    simMapRef: <A_4>(sim_r: unknown, mapi: number, f: string) => Promise<shared_backend.MaybeRep<A_4>>;
    simMapSet: <A_5>(sim_r: unknown, mapi: number, f: string, v: A_5) => Promise<void>;
    simMapDupe: <A_6>(sim_r: unknown, mapi: number, mapo: shared_backend.LinearMap<A_6>) => void;
    simTokenNew: any;
    simTokenBurn: any;
    simTokenDestroy: any;
    bytesConcat: (b1: string, b2: string) => string;
    assert: (b: boolean, message: string) => void;
    Array_set: <A_7>(arr: A_7[], idx: number, val: A_7) => A_7[];
    eq: (n1: shared_backend.num, n2: shared_backend.num) => boolean;
    ge: (n1: shared_backend.num, n2: shared_backend.num) => boolean;
    gt: (n1: shared_backend.num, n2: shared_backend.num) => boolean;
    le: (n1: shared_backend.num, n2: shared_backend.num) => boolean;
    lt: (n1: shared_backend.num, n2: shared_backend.num) => boolean;
    bytesEq: (s1: string, s2: string) => boolean;
    add: (x: shared_backend.num, y: shared_backend.num) => ethers.BigNumber;
    sub: (x: shared_backend.num, y: shared_backend.num) => ethers.BigNumber;
    mod: (x: shared_backend.num, y: shared_backend.num) => ethers.BigNumber;
    mul: (x: shared_backend.num, y: shared_backend.num) => ethers.BigNumber;
    div: (x: shared_backend.num, y: shared_backend.num) => ethers.BigNumber;
    T_Null: any;
    T_Bool: any;
    T_UInt: any;
    T_Bytes: any;
    T_Address: any;
    T_Contract: any;
    T_Digest: any;
    T_Token: any;
    T_Object: (tyMap: {
        [key: string]: any;
    }) => any;
    T_Data: (tyMap: {
        [key: string]: any;
    }) => any;
    T_Array: (ty: any, size: number) => any;
    T_Tuple: (tys: any[]) => any;
    T_Struct: (nameTyPairs: [string, any][]) => any;
};
//# sourceMappingURL=ETH_like_compiled.d.ts.map