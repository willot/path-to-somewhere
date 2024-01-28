
type PotionName = 'Health' | 'Strengh' | 'Mana';
type PotionEffect = 40 | 80;

interface Potion {
    name: PotionName,
    effect: PotionEffect,
}

type WeaponType = 'Sword' | 'Staff' | 'Axe' | 'Dagger';

interface Weapon {
    name: WeaponType,
    damage: number,
}

type ArmorName = 'Light' | 'Medium' | 'Heavy'
interface Armor {
    name: ArmorName,
    defense: number,
}

interface Vitals {
    health: number,
    mana: number,
}

const Inventory = () => {
    const potions = [{ name: 'Health', effect: 40 }, { name: 'Health', effect: 40 }, { name: 'Strengh', effect: 40 },]
    const weapon = {
        name: 'Axe',
        damage: 40,
    };
    const armor = {
        name: 'Medium',
        defense: 20,
    }

    const vitals = {
        health: 200,
        mana: 40,
    }

    return (
        <section className="flex flex-col gap-2 items-center">
            <h2 className="text-3xl font-bold mb-2">Inventory</h2>
            <section>
                <h3>Vitals</h3>
                <div className="flex flex-row gap-2">
                    <span className="text-rose-700 font-bold">Health: {vitals.health}</span>
                    <span className="text-blue-600 font-bold">Mana: {vitals.mana}</span>
                </div>
            </section>
            <section>
                <h3 className="font-medium">Potions</h3>
                <div className="flex flex-row gap-2">
                    {potions.map((potion) => {
                        return (
                            <div className="relative">
                                <img className="max-w-12 max-h-12 rounded " src={potion.name === 'Health' ? './health.png' : './mana.png'} />
                                <span className="absolute top-0 right-0 text-amber-300 bg-slate-400 rounded-full">{potion.effect}</span>
                            </div>
                        )
                    })}
                </div>
            </section>
            <section>
                <h3 className="font-medium">Armor</h3>
                <div className="flex flex-row">
                    <div className="relative">
                        <img className="max-w-40 max-h-40 rounded" src="./armor.png" />
                        <span className="absolute bottom-8 right-0">Type: {armor.name}</span>
                        <span className="absolute bottom-0 right-0">Absorption: {armor.defense}</span>
                    </div>
                </div>
            </section>
            <section>
                <h3 className="font-medium">Weapon</h3>
                <div className="flex flex-row gap-2">
                    <div className="relative">
                        <img className="max-w-40 max-h-40 rounded" src="./rackOfWeapons.png" />
                        <span className="absolute bottom-8 right-0">Type: {weapon.name}</span>
                        <span className="absolute bottom-0 right-0">Damage: {weapon.damage}</span>
                    </div>
                </div>
            </section >
        </section >
    )
}

export default Inventory;