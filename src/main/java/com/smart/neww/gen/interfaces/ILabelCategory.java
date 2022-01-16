/**
 * SmartNewGen exclusive class, all rights reserved
 */
package com.smart.neww.gen.interfaces;

import com.smart.neww.gen.dto.LabelCategoryDTO;
import com.smart.neww.gen.dto.LabelDTO;

/**
 * @author Kevin Candia
 *         07-09-2020
 */
public interface ILabelCategory {

	public LabelDTO findByIdLabel(Long idLabel);

	public LabelCategoryDTO findByIdLabelCategory(Long idLabel);

}
