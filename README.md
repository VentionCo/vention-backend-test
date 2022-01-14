# ⚔️ VENTION QUEST  ⚔️
**GOAL**
- Complete the Quests listed below.
- Provide access to your code, e.g. link to a GitHub repo.
<br />
<br />

**TERMINOLOGIES**
- A composition is a mapping between materials. 
- A material can be composed of other materials with a specified quantity.
- A composition is a top down tree without repeated materials.
- A weapon is composed of **multiple materials**. It has a **name**, **power_level**, and  **qty**. It can also be one of the following **status**: "new" or "broken".
	>For example, an "Axe" is composed of materials with ID 9 and 12, has a power level of:
	>> ID 9  ➡️  90 + 5*(130 + 10*220) = **11,740**
	>>
	>> ID 12 ➡️ **300**
	>>
	>> Total would be **14740**

<br />
<br />

**QUESTS**:
1) Design and create a **Weapon** object in the database and a model class. Create the following seed weapons*:
	> **Excalibur** composed of the following list of materials: ID(1), ID(6), ID(9), ID(12)
	>
	> **Magic Staff** composed of the following material: ID(6)

	\*_Seed files for materials & compositions are already created._
2) Implement method on the Weapon class to compute total power level of a weapon based on its composition(s).

3) API endpoint to update material power level and making sure the weapon(s) that uses it is also updated.

4) CRUD methods for **Material** class.
		_The "**find**" method is already created_
	>Note: Deletion of an material should mark the weapon that uses the material as "broken" and updates the "deleted_at" field of the parent material(s)

5) API endpoint to fetch the maximum quantity of a single **Weapon** that we can build.
	> Example. **Axe** can be built:
	> ID 9  ➡️ 25 + (100 + (110/10))/5 =  47
	> 
	> ID 12 ➡️ 120
	> 
	> Max number of builds = 47
