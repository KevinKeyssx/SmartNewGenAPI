/**
 * SmartNewGen exclusive class, all rights reserved
 */
package com.smart.neww.gen.common;

/**
 * @author Kevin Candia 16-09-2020
 */
public class ConstantsDB {

	public static final String SCHEMA = "smartnewgentest";
	
	public static final String TABLE_LABEL = "snglabel";

	public static final String TABLE_LABELCATEGORY = "snglabel_categ";

	public static final String TABLE_ENTITY_LABELCATEGORY = "sngentity_labelcat";

	public static final String TABLE_ENTITY = "sngentity";

	public static final String TABLE_WALLET = "sngwallet_entity";
	
	public static final String TABLE_CARD_WALLET = "sngcard_wallet";

	private ConstantsDB() {
		throw new IllegalAccessError("Illegal implementation.");
	}

}
