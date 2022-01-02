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
	
	public static final String END_WALLET = VERSION + "/wallet";

	public static final String END_LABEL = VERSION + "/label";

	public static final String END_LABEL_CATEGORY = VERSION + "/labelcategory";

	public static final String SEARCH = "/search";

	public static final String SEARCH_ALL = "/searchall";

	public static final String INSERT = "/insert";

	public static final String END_USER = VERSION + "/user";

	private Constants() {
		throw new IllegalAccessError();
	}

}
