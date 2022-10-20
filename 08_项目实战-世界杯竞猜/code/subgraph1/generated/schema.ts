// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class PlayRecord extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save PlayRecord entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type PlayRecord must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("PlayRecord", id.toString(), this);
    }
  }

  static load(id: string): PlayRecord | null {
    return changetype<PlayRecord | null>(store.get("PlayRecord", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get index(): BigInt {
    let value = this.get("index");
    return value!.toBigInt();
  }

  set index(value: BigInt) {
    this.set("index", Value.fromBigInt(value));
  }

  get player(): Bytes {
    let value = this.get("player");
    return value!.toBytes();
  }

  set player(value: Bytes) {
    this.set("player", Value.fromBytes(value));
  }

  get selectCountry(): BigInt {
    let value = this.get("selectCountry");
    return value!.toBigInt();
  }

  set selectCountry(value: BigInt) {
    this.set("selectCountry", Value.fromBigInt(value));
  }

  get time(): BigInt {
    let value = this.get("time");
    return value!.toBigInt();
  }

  set time(value: BigInt) {
    this.set("time", Value.fromBigInt(value));
  }

  get block(): BigInt {
    let value = this.get("block");
    return value!.toBigInt();
  }

  set block(value: BigInt) {
    this.set("block", Value.fromBigInt(value));
  }
}

export class NeedToHandle extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save NeedToHandle entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type NeedToHandle must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("NeedToHandle", id.toString(), this);
    }
  }

  static load(id: string): NeedToHandle | null {
    return changetype<NeedToHandle | null>(store.get("NeedToHandle", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get list(): Array<string> {
    let value = this.get("list");
    return value!.toStringArray();
  }

  set list(value: Array<string>) {
    this.set("list", Value.fromStringArray(value));
  }
}

export class FinializeHistory extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save FinializeHistory entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type FinializeHistory must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("FinializeHistory", id.toString(), this);
    }
  }

  static load(id: string): FinializeHistory | null {
    return changetype<FinializeHistory | null>(
      store.get("FinializeHistory", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get result(): BigInt {
    let value = this.get("result");
    return value!.toBigInt();
  }

  set result(value: BigInt) {
    this.set("result", Value.fromBigInt(value));
  }
}

export class PlayerDistribution extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save PlayerDistribution entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type PlayerDistribution must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("PlayerDistribution", id.toString(), this);
    }
  }

  static load(id: string): PlayerDistribution | null {
    return changetype<PlayerDistribution | null>(
      store.get("PlayerDistribution", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get player(): Bytes {
    let value = this.get("player");
    return value!.toBytes();
  }

  set player(value: Bytes) {
    this.set("player", Value.fromBytes(value));
  }

  get rewardAmt(): BigInt {
    let value = this.get("rewardAmt");
    return value!.toBigInt();
  }

  set rewardAmt(value: BigInt) {
    this.set("rewardAmt", Value.fromBigInt(value));
  }

  get weight(): BigInt {
    let value = this.get("weight");
    return value!.toBigInt();
  }

  set weight(value: BigInt) {
    this.set("weight", Value.fromBigInt(value));
  }

  get isClaimed(): boolean {
    let value = this.get("isClaimed");
    return value!.toBoolean();
  }

  set isClaimed(value: boolean) {
    this.set("isClaimed", Value.fromBoolean(value));
  }
}

export class RewardHistory extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save RewardHistory entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type RewardHistory must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("RewardHistory", id.toString(), this);
    }
  }

  static load(id: string): RewardHistory | null {
    return changetype<RewardHistory | null>(store.get("RewardHistory", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get index(): BigInt {
    let value = this.get("index");
    return value!.toBigInt();
  }

  set index(value: BigInt) {
    this.set("index", Value.fromBigInt(value));
  }

  get rewardAmt(): BigInt {
    let value = this.get("rewardAmt");
    return value!.toBigInt();
  }

  set rewardAmt(value: BigInt) {
    this.set("rewardAmt", Value.fromBigInt(value));
  }

  get settleBlockNumber(): BigInt {
    let value = this.get("settleBlockNumber");
    return value!.toBigInt();
  }

  set settleBlockNumber(value: BigInt) {
    this.set("settleBlockNumber", Value.fromBigInt(value));
  }

  get totalWeight(): BigInt {
    let value = this.get("totalWeight");
    return value!.toBigInt();
  }

  set totalWeight(value: BigInt) {
    this.set("totalWeight", Value.fromBigInt(value));
  }

  get list(): Array<string> {
    let value = this.get("list");
    return value!.toStringArray();
  }

  set list(value: Array<string>) {
    this.set("list", Value.fromStringArray(value));
  }
}

export class MerkleDistributor extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save MerkleDistributor entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type MerkleDistributor must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("MerkleDistributor", id.toString(), this);
    }
  }

  static load(id: string): MerkleDistributor | null {
    return changetype<MerkleDistributor | null>(
      store.get("MerkleDistributor", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get index(): BigInt {
    let value = this.get("index");
    return value!.toBigInt();
  }

  set index(value: BigInt) {
    this.set("index", Value.fromBigInt(value));
  }

  get totalAmt(): BigInt {
    let value = this.get("totalAmt");
    return value!.toBigInt();
  }

  set totalAmt(value: BigInt) {
    this.set("totalAmt", Value.fromBigInt(value));
  }

  get settleBlockNumber(): BigInt {
    let value = this.get("settleBlockNumber");
    return value!.toBigInt();
  }

  set settleBlockNumber(value: BigInt) {
    this.set("settleBlockNumber", Value.fromBigInt(value));
  }
}

export class SimpleBlock extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save SimpleBlock entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type SimpleBlock must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("SimpleBlock", id.toString(), this);
    }
  }

  static load(id: string): SimpleBlock | null {
    return changetype<SimpleBlock | null>(store.get("SimpleBlock", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get height(): BigInt {
    let value = this.get("height");
    return value!.toBigInt();
  }

  set height(value: BigInt) {
    this.set("height", Value.fromBigInt(value));
  }

  get time(): BigInt {
    let value = this.get("time");
    return value!.toBigInt();
  }

  set time(value: BigInt) {
    this.set("time", Value.fromBigInt(value));
  }
}
