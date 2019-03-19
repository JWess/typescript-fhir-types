
import * as t from 'io-ts';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_Element, IElement} from './RTTI_Element';

export enum ElementDefinition_BindingStrengthKind {
                required = 'required',
extensible = 'extensible',
preferred = 'preferred',
example = 'example'
            }
const ElementDefinition_BindingStrengthKindKeys = t.keyof({
                [ElementDefinition_BindingStrengthKind.required]: null,
[ElementDefinition_BindingStrengthKind.extensible]: null,
[ElementDefinition_BindingStrengthKind.preferred]: null,
[ElementDefinition_BindingStrengthKind.example]: null
            });


            export interface IElementDefinition_Binding {
                
                
                    /**
                     * Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.
                     */
                    id? : string;
                    

                    /**
                     * May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
                     */
                    extension? : IExtension[];
                    

                    /**
                     * May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).
                     */
                    modifierExtension? : IExtension[];
                    

                    /**
                     * Indicates the degree of conformance expectations associated with this binding - that is, the degree to which the provided value set must be adhered to in the instances.
                     */
                    strength? : ElementDefinition_BindingStrengthKind;
                    

                    /**
                     * Extensions for strength
                     */
                    _strength? : IElement;
                    

                    /**
                     * Describes the intended use of this particular set of codes.
                     */
                    description? : string;
                    

                    /**
                     * Extensions for description
                     */
                    _description? : IElement;
                    

                    /**
                     * Refers to the value set that identifies the set of codes the binding refers to.
                     */
                    valueSet? : string;
                    
            }
        


        export const RTTI_ElementDefinition_Binding: t.Type<IElementDefinition_Binding> = t.recursion( 'IElementDefinition_Binding', () =>
                
        t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
strength: ElementDefinition_BindingStrengthKindKeys,
_strength: RTTI_Element,
description: t.string,
_description: RTTI_Element,
valueSet: t.string
        })
        
        );
        

        