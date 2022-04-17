/**
 * SmartNewGen exclusive class, all rights reserved
 */
package com.smart.neww.gen.common;

/**
 * @author Kevin Candia
 * 07-09-2020
 */
public class Constants {

	public static final String END_SNG = "/sng";

	public static final String VERSION = END_SNG + "/v1";

	public static final String END_ENTITY = VERSION + "/entity";

	public static final String END_ENTITY_LABELCATEGORY = VERSION + "/entitylabelcategory";

	public static final String END_WALLET = VERSION + "/wallet";

	public static final String END_CARD_WALLET = VERSION + "/cardwallet";

	public static final String END_LABEL = VERSION + "/label";

	public static final String END_LABEL_CATEGORY = VERSION + "/labelcategory";

	public static final String SEARCH = "/search";

	public static final String SEARCH_BY_ID = "/searchid";

	public static final String SEARCH_ALL = "/searchall";

	public static final String SAVE = "/save";

	public static final String SUCCESS_SAVE_LABEL = "Etiqueta guardada correctamente.";

	public static final String DELETE = "/delete";

	public static final String SUCCESS_DELETE_LABEL = "Etiqueta eliminada correctamente.";

	public static final String END_USER = VERSION + "/user";

	public static final String DEFAULT_PAGE = "0";

	public static final String DEFAULT_SIZE = "10";

	public static final String DEFAULT_ORDER = "idLabel";

	public static final String DEFAULT_ASC = "true";

	private Constants() {
		throw new IllegalAccessError();
	}

}
