# ⚔️ VENTION QUEST ⚔️

**GOAL**

- Complete the Quests listed below.
- Provide access to your code, e.g. link to a GitHub repo.
- Aim for performance and code efficiency
  <br />
  <br />

**TERMINOLOGIES**

- A composition is a mapping between materials.
- A material can be composed of other multiple materials, each with a specified quantity.
- A composition is a top down tree without repeated materials.
- A weapon is composed of **multiple materials**. It has a **name**, **power_level**, and **qty**.
- A material has a **base_power**, which influences the **power_level** of any weapon that uses it.
  > For example, an "Axe" weapon is composed of materials with ID 9 and 12, has a power level of:
  >
  > > ID 9 ➡️ 90 + 5*(130 + 10*220) = **11,740**
  > > > 90 = the Base Power of material ID(9)
  > > >
  > > > 5 = the quantity required to make 1 unit of material ID(9) from ID(10)
  > > >
  > > > 130 = the Base Power of material ID(10)
  > > >
  > > > 10 = the quantity required to make 1 unit of material ID(10) from ID(11)
  > > >
  > > > 220 = the Base Power of material ID(11)
  > >
  > > ID 12 ➡️ **300**
  > > > 300 = the Base Power of material ID (12)
  > >
  > > Total would be **12040**

Reference diagram from the seed data:
<br />

<img width="1004" alt="materials" src="https://user-images.githubusercontent.com/13532850/235346434-2f318669-ff0b-4b34-8156-5942eafa097b.png">

<br />
<br />

**QUESTS**:

1. Design and create a **Weapon** object in the database and a model class. Create the following seed weapons\*:

   > **Excalibur** composed of the following list of materials: ID(1), ID(6), ID(9)
   >
   > **Magic Staff** composed of the following material: ID(6)

   \*_Seed files for materials & compositions are already created._

2. Implement method on the Weapon class to compute total power level of a weapon based on its composition(s).

3. API endpoint to update material power level and making sure the weapon(s) that uses it is also updated.

4. Update method for **Material** class.
   _The "**find**" method is already created_
   > Another note: Update of an material should follow quest #3's logic as well
5. API endpoint to fetch the maximum quantity of a single **Weapon** that we can build.
   > Example. **Axe** can be built:
   >
   > ID 9 ➡️ 25 + ((100 + (110/10) ) / 5) = 47
   >
   > ID 12 ➡️ 120
   >
   > Max number of builds = 47
