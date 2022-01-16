/**
 * SmartNewGen exclusive class, all rights reserved
 */
package com.smart.neww.gen.interfaces;

import java.util.List;

import com.smart.neww.gen.dto.LabelDTO;

/**
 * @author Kevin Candia
 *         22-09-2020
 */
public interface ILabel {

	public LabelDTO findByIdLabel(Long idLabel);

	public List<LabelDTO> findAll();

}
